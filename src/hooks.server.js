import { collectJA4Fingerprint } from '$lib/services/ja4-integration.js';

export async function handle({ event, resolve }) {
  // Collect JA4 fingerprint data for analytics
  const fingerprint = await collectJA4Fingerprint(event.request);
  
  // Add fingerprint to locals for use in pages
  event.locals.ja4_fingerprint = fingerprint;
  
  // Add security headers
  const response = await resolve(event);
  
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  return response;
}
