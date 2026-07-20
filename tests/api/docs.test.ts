import { test, expect } from '@playwright/test';

test('/api/docs endpoint returns valid feed sources and tracks span correctly', async ({ request }) => {
  const response = await request.get('/api/docs', {
    headers: {
      'x-session-id': 'session-123',
      'x-trace-id': 'trace-456',
      'x-span-id': 'span-789'
    }
  });

  expect(response.status()).toBe(200);
  const json = await response.json();

  expect(json.ok).toBe(true);
  expect(json.data).toHaveProperty('service', 'starphone');
  expect(json.data).toHaveProperty('version');
  expect(json.data.endpoints).toMatchObject({
    health: '/api/health',
    healthV1: '/api/v1/health',
    mcp: '/api/mcp',
  });
});
