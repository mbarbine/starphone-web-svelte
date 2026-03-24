import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const sessionId = req.headers.get('x-session-id') || 'unknown-session';
  const traceId = req.headers.get('x-trace-id') || 'unknown-trace';
  const spanId = req.headers.get('x-span-id') || 'unknown-span';

  const mcpSources = [
    'https://mcp.platphormnews.com',
    'https://trace.platphormnews.com/api/mcp',
    'https://docs.platphormnews.com/api/mcp'
  ];

  return NextResponse.json({
    status: 'ok',
    message: 'MCP Integration feed',
    trace: {
      sessionId,
      traceId,
      spanId,
      timestamp: new Date().toISOString()
    },
    sources: mcpSources,
    mcp: {
      tools: [
        'network.get_universe',
        'network.list_realms',
        'content.get_item',
        'content.search'
      ]
    }
  });
}
