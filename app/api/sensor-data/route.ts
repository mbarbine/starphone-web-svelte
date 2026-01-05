import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const JA4_ATLAS_ENDPOINT = process.env.JA4DB_INGEST_URL || 'https://ja4-atlas.platphormnews.com';
const JA4_INGEST_TOKEN = process.env.ja4_ingest_token || process.env.JA4DB_INGEST_TOKEN;
const SENSOR_NAME = process.env.JA4DB_SENSOR_NAME || 'starphone-web';

export async function GET() {
  // Mock sensor data for testing
  const sensorData = {
    temperature: 22 + Math.random() * 5,
    humidity: 40 + Math.random() * 20,
    pressure: 1013 + Math.random() * 10,
    timestamp: new Date().toISOString(),
    sensor_name: SENSOR_NAME,
  };

  return NextResponse.json(sensorData);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Extract JA4 fingerprints from request headers if available
    const ja4Headers = {
      ja4: request.headers.get('x-vercel-ja4'),
      ja4h: request.headers.get('x-vercel-ja4h'),
      ja4s: request.headers.get('x-vercel-ja4s'),
      ja4x: request.headers.get('x-vercel-ja4x'),
    };

    // Build payload for JA4 Atlas
    const payload = {
      ...data,
      source: 'starphone',
      sensor_name: SENSOR_NAME,
      timestamp: new Date().toISOString(),
      // Include JA4 fingerprints if present in headers
      ...(ja4Headers.ja4 || ja4Headers.ja4h || ja4Headers.ja4s || ja4Headers.ja4x ? {
        fingerprints: ja4Headers,
        fingerprint: ja4Headers.ja4 || ja4Headers.ja4h || ja4Headers.ja4s || ja4Headers.ja4x,
        fingerprint_type: ja4Headers.ja4 ? 'ja4' : ja4Headers.ja4h ? 'ja4h' : ja4Headers.ja4s ? 'ja4s' : 'ja4x',
      } : {}),
      // Include client metadata
      client: {
        ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null,
        user_agent: request.headers.get('user-agent'),
        geo: {
          country: request.headers.get('x-vercel-ip-country'),
          region: request.headers.get('x-vercel-ip-country-region'),
          city: request.headers.get('x-vercel-ip-city'),
        },
      },
    };

    if (!JA4_INGEST_TOKEN) {
      console.warn('JA4 ingest token not configured');
      return NextResponse.json({ 
        success: false, 
        error: 'JA4 Atlas integration not configured',
      }, { status: 500 });
    }

    // Send to JA4 Atlas with authentication
    const ja4Response = await fetch(`${JA4_ATLAS_ENDPOINT}/api/ingest/http`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JA4_INGEST_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    if (!ja4Response.ok) {
      const errorText = await ja4Response.text().catch(() => 'Unknown error');
      console.error('Failed to send to JA4 Atlas:', ja4Response.status, errorText);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to forward to JA4 Atlas',
        status: ja4Response.status,
      }, { status: 502 });
    }

    const result = await ja4Response.json().catch(() => ({}));

    return NextResponse.json({ 
      success: true, 
      message: 'Sensor data received and forwarded to JA4 Atlas',
      ja4Status: 'sent',
      atlas_response: result,
    });
  } catch (error) {
    console.error('Error processing sensor data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process sensor data' },
      { status: 500 }
    );
  }
}
