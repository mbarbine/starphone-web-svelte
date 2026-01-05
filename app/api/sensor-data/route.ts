import { NextResponse } from 'next/server';

const JA4_ATLAS_ENDPOINT = 'https://ja4-atlas.platphormnews.com/api/ingest';
const GIVEBUTTER_API_KEY = '8910|KsQ53587r4iQZlfp8yxJSbcx3dRvItUWURJ0stDA';

export async function GET() {
  // Mock sensor data
  const sensorData = {
    temperature: 22 + Math.random() * 5,
    humidity: 40 + Math.random() * 20,
    pressure: 1013 + Math.random() * 10,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(sensorData);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send to JA4 Atlas with authentication
    const ja4Response = await fetch(JA4_ATLAS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GIVEBUTTER_API_KEY}`,
        'X-API-Key': GIVEBUTTER_API_KEY,
      },
      body: JSON.stringify({
        ...data,
        source: 'starphone',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!ja4Response.ok) {
      console.error('Failed to send to JA4 Atlas:', ja4Response.statusText);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Sensor data received and forwarded to JA4 Atlas',
      ja4Status: ja4Response.ok ? 'sent' : 'failed'
    });
  } catch (error) {
    console.error('Error processing sensor data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process sensor data' },
      { status: 500 }
    );
  }
}
