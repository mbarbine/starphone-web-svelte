import { GET as getMcp, HEAD as headMcp, OPTIONS as optionsMcp, POST as postMcp } from "../mcp/route"
import type { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  return getMcp(req)
}

export async function POST(req: NextRequest) {
  return postMcp(req)
}

export async function HEAD() {
  return headMcp()
}

export async function OPTIONS() {
  return optionsMcp()
}
