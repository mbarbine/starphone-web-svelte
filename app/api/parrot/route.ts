import { NextRequest, NextResponse } from 'next/server';

// Simple parrot frames as inline data
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const frameParam = searchParams.get('frame');

  if (frameParam !== null) {
    const frameIndex = parseInt(frameParam);
    if (frameIndex >= 0 && frameIndex < frames.length) {
      return new NextResponse(frames[frameIndex], {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
  }

  // Return animation instructions
  return NextResponse.json({
    message: 'Party Parrot API 🦜',
    usage: 'GET /api/parrot?frame=0-9',
    frames: frames.length,
  });
}
