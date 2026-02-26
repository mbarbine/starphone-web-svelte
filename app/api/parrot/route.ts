import { NextRequest, NextResponse } from 'next/server';

// Standard frames
const frames = [
  '   🦜\n',
  '  🦜 \n',
  ' 🦜  \n',
  '🦜   \n',
  ' 🦜  \n',
  '  🦜 \n',
  '   🦜\n',
  '    🦜\n',
  '   🦜\n',
  '  🦜 \n',
];

// Signal strength frames (simulated)
const signalFrames = [
  'Signal: ▂▃▄▅▆▇ 100%',
  'Signal: ▂▃▄▅▆  80%',
  'Signal: ▂▃▄▅   60%',
  'Signal: ▂▃▄    40%',
  'Signal: ▂▃     20%',
  'Signal: ▂      10%',
  'Signal:        0% (Searching...)',
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const frameParam = searchParams.get('frame');
  const modeParam = searchParams.get('mode');

  // Mode: Signal Strength
  if (modeParam === 'signal') {
    const signalIndex = Math.floor(Math.random() * signalFrames.length);
    return new NextResponse(signalFrames[signalIndex], {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // Mode: Specific Frame
  if (frameParam !== null) {
    const frameIndex = parseInt(frameParam);
    if (frameIndex >= 0 && frameIndex < frames.length) {
      return new NextResponse(frames[frameIndex], {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
  }

  // Default: JSON Info
  return NextResponse.json({
    message: 'Party Parrot API 🦜',
    usage: {
        standard: 'GET /api/parrot?frame=0-9',
        signal: 'GET /api/parrot?mode=signal'
    },
    frames: frames.length,
    version: '2.0.0' // Enhanced for 0.0.2
  });
}
