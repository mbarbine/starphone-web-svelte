import { NextResponse } from 'next/server';

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
