import { test, expect } from '@playwright/test';

test('/api/network/graph endpoint returns graph representation correctly', async ({ request }) => {
  const response = await request.get('/api/network/graph', {
    headers: {
      'x-session-id': 'session-123',
      'x-trace-id': 'trace-456',
      'x-span-id': 'span-789'
    }
  });

  expect(response.status()).toBe(200);
  const json = await response.json();

  expect(json.status).toBe('ok');
  expect(json.nodes).toBeDefined();
  expect(json.edges).toBeDefined();
  expect(json.nodes.length).toBeGreaterThan(0);
  expect(json.edges.length).toBeGreaterThan(0);
});
