import { NextResponse, NextRequest } from "next/server";

const tools = [
  { name: "network.get_universe" },
  { name: "network.list_realms" },
  { name: "content.get_item" },
  { name: "content.search" },
]

type JsonRpcRequest = {
  jsonrpc?: string
  id?: unknown
  method?: string
  params?: Record<string, unknown>
}

function jsonRpcError(id: unknown, code: number, message: string, status = 200) {
  return NextResponse.json({ jsonrpc: "2.0", id, error: { code, message } }, { status })
}

function jsonRpcResult(id: unknown, result: Record<string, unknown>) {
  return NextResponse.json({ jsonrpc: "2.0", id, ...result })
}

function toolPayload(payload: JsonRpcRequest) {
  const name = typeof payload.params?.name === "string" ? payload.params.name : ""
  const tool = tools.find((candidate) => candidate.name === name)
  if (!tool) return null
  return tool
}

function resourcePayload(payload: JsonRpcRequest) {
  const uri = typeof payload.params?.uri === "string" ? payload.params.uri : ""
  return { uri }
}

function handleRequest(payload: JsonRpcRequest | null) {
  if (!payload || payload.jsonrpc !== "2.0" || typeof payload.method !== "string") {
    return jsonRpcError(payload?.id ?? null, -32600, "Invalid Request")
  }

  const method = payload.method
  if (method === "initialize") {
    return jsonRpcResult(payload.id ?? null, {
      result: {
        protocolVersion: "2025-03-26",
        capabilities: { tools: {}, resources: {}, prompts: {} },
        serverInfo: { name: "starphone", version: "1.0.0" },
      },
    })
  }

  if (method === "ping") {
    return jsonRpcResult(payload.id ?? null, { result: {} })
  }

  if (method === "tools/list") {
    return jsonRpcResult(payload.id ?? null, {
      result: { tools: tools.map((tool) => ({ name: tool.name })) },
    })
  }

  if (method === "resources/list") {
    return jsonRpcResult(payload.id ?? null, { result: { resources: [] } })
  }

  if (method === "prompts/list") {
    return jsonRpcResult(payload.id ?? null, { result: { prompts: [] } })
  }

  if (method === "resources/read") {
    const { uri } = resourcePayload(payload)
    if (!uri) {
      return jsonRpcError(payload.id ?? null, -32602, "Missing resource URI")
    }
    return jsonRpcError(payload.id ?? null, -32602, `Resource not found: ${uri}`)
  }

  if (method === "prompts/get") {
    const name = typeof payload.params?.name === "string" ? payload.params.name : ""
    if (!name) {
      return jsonRpcError(payload.id ?? null, -32602, "Missing prompt name")
    }
    return jsonRpcError(payload.id ?? null, -32602, `Prompt not found: ${name}`)
  }

  if (method === "tools/call") {
    const tool = toolPayload(payload)
    if (!tool) {
      return jsonRpcError(payload.id ?? null, -32602, `Tool not found: ${String(payload.params?.name ?? "")}`)
    }

    if (tool.name === "network.get_universe") {
      return jsonRpcResult(payload.id ?? null, { result: { content: [{ type: "text", text: "Network universe is not currently available." }] } })
    }

    if (tool.name === "network.list_realms") {
      return jsonRpcResult(payload.id ?? null, { result: { content: [{ type: "text", text: "No network realms are currently available." }] } })
    }

    if (tool.name === "content.get_item") {
      return jsonRpcResult(payload.id ?? null, { result: { content: [{ type: "text", text: "content.get_item is currently a placeholder and returns no data." }] } })
    }

    return jsonRpcResult(payload.id ?? null, {
      result: { content: [{ type: "text", text: `Tool executed: ${tool.name}` }] },
    })
  }

  return jsonRpcError(payload.id ?? null, -32601, `Method not found: ${payload.method}`)
}

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
      tools: tools.map((tool) => tool.name),
    }
  });
}

export async function POST(req: NextRequest) {
  let payload: JsonRpcRequest | JsonRpcRequest[] | null = null
  try {
    payload = await req.json()
  } catch {
    return jsonRpcError(null, -32700, "Parse error", 400)
  }

  if (Array.isArray(payload)) {
    const responses = payload.map((item) => {
      if (!item || typeof item !== "object") return jsonRpcError(null, -32600, "Invalid Request")
      return handleRequest(item as JsonRpcRequest)
    })
    if (!responses.length) return jsonRpcError(null, -32600, "Invalid Request")
    const payloads = await Promise.all(responses.map((response) => response.json()))
    return NextResponse.json(payloads)
  }

  return handleRequest(payload as JsonRpcRequest)
}

export const OPTIONS = () =>
  new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "GET,POST,HEAD,OPTIONS",
      "Access-Control-Allow-Headers": "content-type,authorization,x-session-id,x-trace-id,x-span-id",
    },
  })

export const HEAD = () => new NextResponse(null, { status: 200 })
