import { test, expect } from '@playwright/test';

test('/api/history endpoint returns 400 if session/trace headers are missing', async ({ request }) => {
  const response = await request.get('/api/history');
  expect(response.status()).toBe(400);
});

test('/api/history endpoint returns valid trace history and span mapping', async ({ request }) => {
  const response = await request.get('/api/history', {
    headers: {
      'x-session-id': 'session-123',
      'x-trace-id': 'trace-456',
      'x-span-id': 'span-789'
    }
  });

  expect(response.status()).toBe(200);
  const json = await response.json();

  expect(json.status).toBe('ok');
  expect(json.session.id).toBe('session-123');
  expect(json.trace.id).toBe('trace-456');
  expect(json.trace.spans).toBeDefined();
  expect(json.trace.spans.length).toBeGreaterThan(0);
  expect(json.atlasLink).toBe('https://atlas.platphormnews.com/traces/trace-456');
  expect(json.insightsLink).toBe('https://insights.platphormnews.com/session/session-123');
});
