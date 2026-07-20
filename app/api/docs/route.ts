import { NextResponse } from "next/server"

export async function GET() {
  const version = process.env.npm_package_version || "1.1.0"

  return NextResponse.json({
    ok: true,
    data: {
      service: "starphone",
      version,
      endpoints: {
        health: "/api/health",
        healthV1: "/api/v1/health",
        mcp: "/api/mcp",
        docs: "/api/docs",
        networkGraph: "/api/network/graph",
      },
      openapi: "https://starphone.platphormnews.com/openapi.yaml",
      trust: "https://starphone.platphormnews.com/.well-known/trust.json",
      mcpManifest: "https://starphone.platphormnews.com/.well-known/mcp.json",
      lastUpdated: new Date().toISOString(),
    },
  })
}
