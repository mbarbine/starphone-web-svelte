// src/routes/api/parrot/+server.js

import { readdir, readFile } from 'fs/promises';
import { Readable } from 'stream';
import colors from 'colors/safe';
import path from 'path';

// Define the path to the frames directory
const framesDir = path.resolve('src/routes/api/parrot/frames');

// Set up frames in memory
let originalFrames = [];
let flippedFrames = [];

const loadFrames = async () => {
  try {
    const files = await readdir(framesDir);
    originalFrames = await Promise.all(
      files.map(async (file) => {
        const frame = await readFile(path.join(framesDir, file), 'utf-8');
        return frame.toString();
      })
    );
    flippedFrames = originalFrames.map((frame) =>
      frame.split('').reverse().join('')
    );
  } catch (err) {
    console.error('Error loading frames:', err);
  }
};

// Load frames on startup
await loadFrames();

const colorsOptions = [
  'red',
  'yellow',
  'green',
  'blue',
  'magenta',
  'cyan',
  'white',
];
const numColors = colorsOptions.length;

// Select a random color, ensuring it's different from the last one
const selectColor = (previousColor) => {
  let color;
  do {
    color = Math.floor(Math.random() * numColors);
  } while (color === previousColor);
  return color;
};

// Stream frames to the client
const streamFrames = (stream, flip = false) => {
  let frameIndex = 0;
  let lastColor = -1;
  const frames = flip ? flippedFrames : originalFrames;

  const interval = setInterval(() => {
    if (frameIndex >= frames.length) {
      frameIndex = 0; // Loop back to the first frame
    }

    // Clear the terminal screen using Unicode escape sequences
    stream.push('\u001b[2J\u001b[3J\u001b[H');

    // Select a random color different from the last one
    const newColor = selectColor(lastColor);
    lastColor = newColor;

    // Push the colored frame to the stream
    stream.push(colors[colorsOptions[newColor]](frames[frameIndex]));

    // Move to the next frame
    frameIndex++;
  }, 70); // Adjust the speed of the animation here (70ms between frames)

  return interval;
};

// Validate the query parameters
const validateQuery = ({ flip }) => ({
  flip: String(flip).toLowerCase() === 'true',
});

// Handle the request
export const GET = async ({ request }) => {
  // Detect user-agent to provide the parrot animation to curl requests
  if (
    request.headers &&
    request.headers.get('user-agent') &&
    !request.headers.get('user-agent').includes('curl')
  ) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: 'https://github.com/hugomd/parrot.live',
      },
    });
  }

  // Create a readable stream for continuous animation
  const stream = new Readable({
    read() {},
  });

  const params = new URL(request.url).searchParams;
  const flip = params.get('flip') === 'true';

  // Stream the frames to the client
  const interval = streamFrames(stream, flip);

  // Cleanup when the request is closed
  request.signal.addEventListener('abort', () => {
    clearInterval(interval);
    stream.destroy();
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
