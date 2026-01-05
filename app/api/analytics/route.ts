import { NextResponse } from 'next/server';

export async function POST() {
  // Simple analytics endpoint
  // In production, you'd store this data in a database
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Analytics endpoint',
    note: 'Use @vercel/analytics for production analytics'
  });
}
