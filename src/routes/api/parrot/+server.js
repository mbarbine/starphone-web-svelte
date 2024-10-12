import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';

// Function to retrieve the parrot animation (from the official parrot.live repository)
async function fetchParrot() {
    const response = await fetch('https://parrot.live/');
    return response.text();  // Retrieves the ASCII parrot animation
}

export async function GET() {
    const parrotAnimation = await fetchParrot();
    return new Response(parrotAnimation, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
