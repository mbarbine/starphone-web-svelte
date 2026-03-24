import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const sessionId = req.headers.get('x-session-id');
  const traceId = req.headers.get('x-trace-id');
  const spanId = req.headers.get('x-span-id');

  if (!sessionId || !traceId) {
    return NextResponse.json({ error: 'Missing x-session-id or x-trace-id headers' }, { status: 400 });
  }

  // Round trip span tracking logic mapped to Atlas and Insights
  return NextResponse.json({
    status: 'ok',
    message: 'Trace history retrieved',
    session: {
      id: sessionId,
      active: true
    },
    trace: {
      id: traceId,
      spans: [
        {
          id: spanId || 'generated-span-1',
          source: 'docs.platphormnews.com',
          timestamp: new Date().toISOString(),
          status: 'completed'
        },
        {
          id: 'generated-span-2',
          source: 'insights.platphormnews.com',
          timestamp: new Date().toISOString(),
          status: 'active'
        }
      ]
    },
    atlasLink: `https://atlas.platphormnews.com/traces/${traceId}`,
    insightsLink: `https://insights.platphormnews.com/session/${sessionId}`
  });
}
