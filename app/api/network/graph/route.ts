import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const sessionId = req.headers.get('x-session-id') || 'unknown-session';
  const traceId = req.headers.get('x-trace-id') || 'unknown-trace';
  const spanId = req.headers.get('x-span-id') || 'unknown-span';

  return NextResponse.json({
    status: 'ok',
    message: 'Network Graph',
    trace: {
      sessionId,
      traceId,
      spanId,
      timestamp: new Date().toISOString()
    },
    nodes: [
      { id: 'docs.platphormnews.com', type: 'realm', capabilities: ['docs', 'api', 'mcp'] },
      { id: 'trace.platphormnews.com', type: 'realm', capabilities: ['traces', 'api', 'mcp'] },
      { id: 'insights.platphormnews.com', type: 'realm', capabilities: ['observability', 'api'] },
      { id: 'atlas.platphormnews.com', type: 'realm', capabilities: ['network-platform', 'api'] },
      { id: 'monitor.platphormnews.com', type: 'realm', capabilities: ['status', 'api'] }
    ],
    edges: [
      { source: 'docs.platphormnews.com', target: 'atlas.platphormnews.com', relation: 'registered_in' },
      { source: 'trace.platphormnews.com', target: 'insights.platphormnews.com', relation: 'observes' }
    ]
  });
}
