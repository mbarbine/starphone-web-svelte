import { NextRequest, NextResponse } from 'next/server';
import colors from 'colors';
import fs from 'fs';
import path from 'path';

// Enable terminal colors
colors.enable();

// Frame data
const frames: string[] = [];
for (let i = 0; i <= 9; i++) {
  const framePath = path.join(process.cwd(), 'src', 'routes', 'api', 'parrot', 'frames', `${i}.txt`);
  try {
    frames.push(fs.readFileSync(framePath, 'utf-8'));
  } catch (error) {
    console.error(`Failed to load frame ${i}:`, error);
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const frame = searchParams.get('frame');

  if (frame && frames[parseInt(frame)]) {
    const coloredFrame = colors.rainbow(frames[parseInt(frame)]);
    return new NextResponse(coloredFrame, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // Return animation instructions
  return NextResponse.json({
    message: 'Party Parrot API',
    usage: 'GET /api/parrot?frame=0-9',
    frames: frames.length,
  });
}
