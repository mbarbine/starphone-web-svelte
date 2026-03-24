import { test, expect } from '@playwright/test';

test('/api/mcp endpoint returns valid MCP sources and tracks span correctly', async ({ request }) => {
  const response = await request.get('/api/mcp', {
    headers: {
      'x-session-id': 'session-123',
      'x-trace-id': 'trace-456',
      'x-span-id': 'span-789'
    }
  });

  expect(response.status()).toBe(200);
  const json = await response.json();

  expect(json.status).toBe('ok');
  expect(json.trace.sessionId).toBe('session-123');
  expect(json.trace.traceId).toBe('trace-456');
  expect(json.trace.spanId).toBe('span-789');
  expect(json.sources.length).toBeGreaterThan(0);
  expect(json.mcp.tools).toContain('network.get_universe');
});
