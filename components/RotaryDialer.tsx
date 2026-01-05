'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './RotaryDialer.module.css';

interface RotaryDialerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DIAL_SOUNDS = [
  { freq: 941, freq2: 1336 }, // 0
  { freq: 697, freq2: 1209 }, // 1
  { freq: 697, freq2: 1336 }, // 2
  { freq: 697, freq2: 1477 }, // 3
  { freq: 770, freq2: 1209 }, // 4
  { freq: 770, freq2: 1336 }, // 5
  { freq: 770, freq2: 1477 }, // 6
  { freq: 852, freq2: 1209 }, // 7
  { freq: 852, freq2: 1336 }, // 8
  { freq: 852, freq2: 1477 }, // 9
];

const RESPONSES = [
  { number: '911', response: '🚨 "This is Starphone Emergency. How may we help you today, Space Cadet?"', voice: 'serious' },
  { number: '411', response: '📞 "Starphone Directory Assistance. The nearest phone booth is... RIGHT HERE! 😄"', voice: 'friendly' },
  { number: '666', response: '👹 "Sorry, that line is busy. The Devil is on another call."', voice: 'spooky' },
  { number: '420', response: '🌿 "Duuude... you have reached the Chill Zone. Far out, man."', voice: 'chill' },
  { number: '007', response: '🕵️ "Bond. James Bond. The name is... wait, who is this?"', voice: 'suave' },
  { number: '123', response: '🔢 "Easy as 1-2-3! You win a prize: THIS PHONE CALL! 🎉"', voice: 'excited' },
  { number: '000', response: '🌌 "Welcome to the void. It\'s very quiet here. Too quiet..."', voice: 'mysterious' },
  { number: '1337', response: '💻 "L33T H4X0R D3T3CT3D. Initiating ultra-secure mode..."', voice: 'hacker' },
  { number: '8675309', response: '🎵 "Jenny? Is that you? I got your number!"', voice: 'singing' },
  { number: '42', response: '🌌 "The answer to life, the universe, and everything. You\'re welcome."', voice: 'wise' },
];

const DEFAULT_RESPONSES = [
  '📡 "Connecting to satellite... beep boop... signal acquired from the FUTURE!"',
  '🛸 "Starphone HQ here. Your call has been logged across 7 dimensions."',
  '🤖 "Hello, human. I am the Starphone AI. How may I amaze you today?"',
  '📻 "Crackle... This is Mars Base Alpha. We read you loud and clear!"',
  '🎭 "You\'ve reached the Intergalactic Drama Hotline. DRAMA incoming!"',
];

export default function RotaryDialer({ isOpen, onClose }: RotaryDialerProps) {
  const [dialedNumber, setDialedNumber] = useState('');
  const [isDialing, setIsDialing] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [response, setResponse] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'ringing' | 'connected' | 'ended'>('idle');
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize audio context
  useEffect(() => {
    if (isOpen && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen]);

  // Play dial tone
  const playTone = useCallback((digit: number) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc1.frequency.value = DIAL_SOUNDS[digit].freq;
    osc2.frequency.value = DIAL_SOUNDS[digit].freq2;
    
    gain.gain.value = 0.1;
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    
    osc1.start();
    osc2.start();
    
    setTimeout(() => {
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      setTimeout(() => {
        osc1.stop();
        osc2.stop();
      }, 100);
    }, 150);
  }, []);

  // Play ringing sound
  const playRinging = useCallback(() => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    const playRingCycle = () => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 440;
      gain.gain.value = 0.1;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      
      setTimeout(() => {
        osc.frequency.value = 480;
      }, 500);
      
      setTimeout(() => {
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        setTimeout(() => osc.stop(), 100);
      }, 1000);
    };
    
    playRingCycle();
    setTimeout(playRingCycle, 2000);
  }, []);

  // Handle dial
  const handleDial = useCallback((digit: number) => {
    if (isDialing || callStatus !== 'idle') return;
    
    setIsDialing(true);
    playTone(digit);
    
    // Animate rotary dial
    const targetRotation = (digit === 0 ? 10 : digit) * 36;
    setRotation(targetRotation);
    
    setTimeout(() => {
      setRotation(0);
      setDialedNumber(prev => prev + digit);
      setIsDialing(false);
    }, 500);
  }, [isDialing, callStatus, playTone]);

  // Make call
  const makeCall = useCallback(() => {
    if (!dialedNumber) return;
    
    setCallStatus('ringing');
    playRinging();
    
    setTimeout(() => {
      setCallStatus('connected');
      
      // Find matching response
      const match = RESPONSES.find(r => r.number === dialedNumber);
      if (match) {
        setResponse(match.response);
      } else {
        setResponse(DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)]);
      }
      
      // Start microphone visualization
      startMicrophoneCapture();
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialedNumber, playRinging]);

  // Start microphone
  const startMicrophoneCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      if (audioContextRef.current) {
        const source = audioContextRef.current.createMediaStreamSource(stream);
        const analyser = audioContextRef.current.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyserRef.current = analyser;
        setIsListening(true);
        visualize();
      }
    } catch {
      console.log('Microphone access denied - that\'s okay!');
      setIsListening(false);
    }
  };

  // Visualize audio
  const visualize = () => {
    if (!analyserRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const draw = () => {
      if (!isListening) return;
      animationRef.current = requestAnimationFrame(draw);
      
      analyser.getByteFrequencyData(dataArray);
      
      ctx.fillStyle = 'rgba(0, 20, 40, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        
        const hue = (i / bufferLength) * 60 + 180;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    };
    
    draw();
  };

  // Hang up
  const hangUp = () => {
    setCallStatus('ended');
    setIsListening(false);
    
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setTimeout(() => {
      setCallStatus('idle');
      setDialedNumber('');
      setResponse(null);
    }, 1500);
  };

  // Clear
  const clearNumber = () => {
    setDialedNumber('');
  };

  // Close handler
  const handleClose = () => {
    hangUp();
    setTimeout(onClose, 100);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>✕</button>
        
        <div className={styles.phoneHeader}>
          <h2>📞 STARPHONE</h2>
          <p className={styles.secretCode}>Secret PH3AR Mode Activated!</p>
        </div>

        <div className={styles.display}>
          <div className={styles.number}>
            {dialedNumber || '___'}
          </div>
          <div className={styles.status}>
            {callStatus === 'idle' && 'Ready to dial'}
            {callStatus === 'ringing' && '📡 Ringing...'}
            {callStatus === 'connected' && '🟢 Connected'}
            {callStatus === 'ended' && '📵 Call ended'}
          </div>
        </div>

        {response && (
          <div className={styles.responseBox}>
            <p>{response}</p>
          </div>
        )}

        {isListening && (
          <div className={styles.visualizer}>
            <canvas ref={canvasRef} width={280} height={60} />
            <p className={styles.speakPrompt}>🎤 Speak into your mic!</p>
          </div>
        )}

        <div className={styles.dialPad}>
          <div 
            className={styles.rotaryDial}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit, index) => {
              const angle = (index * 36 - 90) * (Math.PI / 180);
              const radius = 90;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <button
                  key={digit}
                  className={styles.dialButton}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onClick={() => handleDial(digit)}
                  disabled={isDialing || callStatus !== 'idle'}
                >
                  {digit}
                </button>
              );
            })}
            <div className={styles.dialCenter}>
              <span>☎️</span>
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          {callStatus === 'idle' ? (
            <>
              <button 
                className={styles.callButton}
                onClick={makeCall}
                disabled={!dialedNumber}
              >
                📞 Call
              </button>
              <button 
                className={styles.clearButton}
                onClick={clearNumber}
              >
                ⌫ Clear
              </button>
            </>
          ) : (
            <button 
              className={styles.hangUpButton}
              onClick={hangUp}
            >
              📵 Hang Up
            </button>
          )}
        </div>

        <p className={styles.hint}>
          💡 Try: 911, 411, 007, 42, 420, 666, 1337, 8675309
        </p>
      </div>
    </div>
  );
}
