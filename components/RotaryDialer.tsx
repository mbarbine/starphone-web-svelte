'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './RotaryDialer.module.css';

interface RotaryDialerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sound effects map
const DIAL_SOUNDS: { [key: number]: { freq: number; freq2: number } } = {
  1: { freq: 697, freq2: 1209 },
  2: { freq: 697, freq2: 1336 },
  3: { freq: 697, freq2: 1477 },
  4: { freq: 770, freq2: 1209 },
  5: { freq: 770, freq2: 1336 },
  6: { freq: 770, freq2: 1477 },
  7: { freq: 852, freq2: 1209 },
  8: { freq: 852, freq2: 1336 },
  9: { freq: 852, freq2: 1477 },
  0: { freq: 941, freq2: 1336 },
};

// Fun responses
const RESPONSES = [
  { number: '8675309', response: '🎵 "Jenny? Is that you? I got your number!"', voice: 'singing' },
  { number: '42', response: '🌌 "The answer to life, the universe, and everything. You\'re welcome."', voice: 'wise' },
  { number: '911', response: '🚑 "Emergency Services here. Just kidding, this is a phone booth in space!"', voice: 'urgent' },
  { number: '411', response: 'ℹ️ "Directory Assistance. Who you gonna call? Ghostbusters!"', voice: 'helpful' },
  { number: '007', response: '🔫 "Bond. James Bond. Shaken, not stirred."', voice: 'suave' },
  { number: '1337', response: '💻 "H4CK THE PL4N3T! PH3AR is watching."', voice: 'hacker' },
  { number: '666', response: '🔥 "Hello? Is it me you\'re looking for?" - Satan', voice: 'evil' },
  { number: '420', response: '🌿 "Duuuude. Space is like... really big."', voice: 'chill' },
  // 1-800-CHATGPT (18002428478)
  { number: '18002428478', response: '🤖 "Hello! I am ChatGPT. Ask me anything about the universe!"', voice: 'ai' },
  { number: '18002428', response: '🤖 "Hello! I am ChatGPT. Ask me anything about the universe!"', voice: 'ai' }, // Shortened version
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
  const [chatGptMode, setChatGptMode] = useState(false);

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
    
    const sound = DIAL_SOUNDS[digit] || DIAL_SOUNDS[0];

    osc1.frequency.value = sound.freq;
    osc2.frequency.value = sound.freq2;
    
    gain.gain.value = 0.1;
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    
    osc1.start();
    osc2.start();
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    setTimeout(() => {
      osc1.stop();
      osc2.stop();
    }, 150);
  }, []);

  // Play ringing sound
  const playRinging = useCallback(() => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = 440;
    osc2.frequency.value = 480;
    
    gain.gain.value = 0.05;

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();

    setTimeout(() => {
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
        osc1.stop();
        osc2.stop();
    }, 2000); // 2 second ring
  }, []);

  // Handle dial
  const handleDial = useCallback((digit: number) => {
    if (isDialing || callStatus !== 'idle') return;
    
    setIsDialing(true);
    playTone(digit);
    
    // Animate rotary dial
    const rotationDegrees = (digit === 0 ? 10 : digit) * 30; // 30 degrees per number approx

    setRotation(rotationDegrees);
    
    setTimeout(() => {
      setRotation(0);
      setDialedNumber(prev => prev + digit.toString());
      setIsDialing(false);
    }, 500); // Wait for "dial back"
  }, [isDialing, callStatus, playTone]);

  // Visualize audio
  const visualize = useCallback(() => {
    if (!analyserRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const draw = () => {
      // Using ref to check latest state inside loop
      // We can't rely on closure state for loop termination easily without refs or cancellation
      // But animationRef cancellation handles the stop
      
      if (!canvasRef.current) return;

      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        const hue = i * 2 + 100;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };
    
    draw();
  }, []); // Dependencies: empty as refs are stable

  // Start microphone
  const startMicrophoneCapture = useCallback(async () => {
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
      console.log('Microphone access denied - visualization disabled');
      setIsListening(false);
    }
  }, [visualize]);

  // Make call
  const makeCall = useCallback(() => {
    if (!dialedNumber) return;

    setCallStatus('ringing');
    playRinging();

    setTimeout(() => {
      setCallStatus('connected');

      // Check for 1-800-CHATGPT or variants
      const normalizedNumber = dialedNumber.replace(/[^0-9]/g, '');
      if (normalizedNumber.includes('18002428478') || normalizedNumber.includes('18002428')) {
          setChatGptMode(true);
          setResponse('🤖 "Hello! I am a simulated ChatGPT. Ask me anything!"');
          startMicrophoneCapture();
          return;
      }

      // Find matching response
      const match = RESPONSES.find(r => r.number === dialedNumber);
      if (match) {
        setResponse(match.response);
      } else {
        setResponse(DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)]);
      }

      // Start microphone visualization for effect
      startMicrophoneCapture();
    }, 3000); // 3 second ring delay
  }, [dialedNumber, playRinging, startMicrophoneCapture]);

  // Simulated Chat Functionality
  const handleSimulatedChat = () => {
      if (!chatGptMode) return;
      setTimeout(() => {
          const responses = [
              "That is a fascinating question about the cosmos.",
              "I calculate a 99.9% probability of success.",
              "The stars are aligning for you.",
              "Please hold while I download the internet...",
              "My neural networks suggest you should buy a Starphone."
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          setResponse(`🤖 "${randomResponse}"`);
      }, 2000);
  };

  // Hang up
  const hangUp = () => {
    setCallStatus('ended');
    setIsListening(false);
    setChatGptMode(false);
    
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
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
      if (callStatus !== 'idle') {
          hangUp();
          setTimeout(onClose, 500);
      } else {
          onClose();
      }
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

        <div className={styles.visualizerContainer}>
            {isListening ? (
                <>
                    <canvas ref={canvasRef} width={280} height={60} className={styles.canvas} />
                    <p className={styles.speakPrompt}>
                        {chatGptMode ? "🤖 AI Listening..." : "🎤 Speak into your mic!"}
                    </p>
                </>
            ) : (
                <div className={styles.placeholderVisualizer} />
            )}
        </div>

        <div className={styles.dialPad}>
           <div className={styles.rotaryContainer}>
              <div
                className={styles.rotaryDial}
                style={{ transform: `rotate(-${rotation}deg)`, transition: isDialing ? 'transform 0.5s ease-out' : 'none' }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit, index) => {
                  const angleDeg = (index * 30) - 120;
                  const angleRad = angleDeg * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angleRad) * radius + 120;
                  const y = Math.sin(angleRad) * radius + 120;

                  return (
                    <button
                      key={digit}
                      className={styles.dialButton}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                      }}
                      onClick={() => handleDial(digit)}
                      disabled={isDialing || callStatus !== 'idle'}
                    >
                      {digit}
                    </button>
                  );
                })}
              </div>
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
          💡 Try: 1-800-CHATGPT, 911, 42, 007
        </p>
      </div>
    </div>
  );
}
