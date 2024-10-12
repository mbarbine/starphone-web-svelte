import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { setInterval } from 'timers/promises';
import colors from 'colors/safe';

// Global variables to store the frames
let originalFrames = [];
let flippedFrames = [];

// Load the frames from the filesystem once when the server starts
const loadFrames = async () => {
  const framesDir = path.resolve('src/routes/api/parrot/frames');
  const frameFiles = fs.readdirSync(framesDir);

  originalFrames = frameFiles.map(file => {
    const frame = fs.readFileSync(path.join(framesDir, file), 'utf-8');
    return frame;
  });

  // Create flipped frames by reversing the content of each original frame
  flippedFrames = originalFrames.map(f => f.split('').reverse().join(''));
};

// Initialize frames on server start
await loadFrames();

// Helper function to select a random color
const colorsOptions = ['red', 'yellow', 'green', 'blue', 'magenta', 'cyan', 'white'];
const numColors = colorsOptions.length;
const selectColor = (previousColor) => {
  let color;
  do {
    color = Math.floor(Math.random() * numColors);
  } while (color === previousColor);
  return color;
};

// Stream the animation frames continuously
const streamFrames = (stream, flip = false) => {
  let frameIndex = 0;
  let lastColor = -1;
  const frames = flip ? flippedFrames : originalFrames;

  const streamInterval = setInterval(100); // Send a new frame every 100ms
  (async () => {
    for await (const _ of streamInterval) {
      if (frameIndex >= frames.length) {
        frameIndex = 0; // Loop back to the first frame
      }

      // Clear the terminal screen
      stream.push('\033[2J\033[3J\033[H');

      // Select a random color different from the last one
      const newColor = selectColor(lastColor);
      lastColor = newColor;

      // Push the colored frame to the stream
      stream.push(colors[colorsOptions[newColor]](frames[frameIndex]));

      // Move to the next frame
      frameIndex++;
    }
  })();

  return streamInterval;
};

// API Route handler
export async function GET({ url }) {
  // Check if frames are loaded
  if (originalFrames.length === 0 || flippedFrames.length === 0) {
    return new Response('Frames not loaded.', { status: 500 });
  }

  // Check for the 'flip' query parameter
  const flip = url.searchParams.get('flip') === 'true';

  // Create a readable stream
  const stream = new Readable({
    read() {} // No-op, we'll manually push data
  });

  // Stream the parrot animation frames
  const interval = streamFrames(stream, flip);

  // Handle when the client disconnects
  stream.on('close', () => {
    clearInterval(interval);
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    }
  });
}
