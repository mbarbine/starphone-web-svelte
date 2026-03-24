import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const sessionId = req.headers.get('x-session-id') || 'unknown-session';
  const traceId = req.headers.get('x-trace-id') || 'unknown-trace';
  const spanId = req.headers.get('x-span-id') || 'unknown-span';

  const feedSources = [
    'https://platphormnews.com/api/network/graph',
    'https://docs.platphormnews.com',
    'https://trace.platphormnews.com',
    'https://codex.platphormnews.com',
    'https://kanban.platphormnews.com/api/v1/openapi.json',
    'https://claws.platphormnews.com'
  ];

  return NextResponse.json({
    status: 'ok',
    message: 'Docs API feed',
    trace: {
      sessionId,
      traceId,
      spanId,
      timestamp: new Date().toISOString()
    },
    sources: feedSources,
    docs: {
      type: 'rss_aggregate',
      count: feedSources.length,
      items: [
        {
          id: 'doc_1',
          title: 'Universal Schema Pack Documentation',
          url: 'https://docs.platphormnews.com/schemas/universal'
        }
      ]
    }
  });
}
