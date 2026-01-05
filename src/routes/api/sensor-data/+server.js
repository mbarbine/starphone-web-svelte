import { json } from '@sveltejs/kit';
import { submitSensorData } from '$lib/services/ja4-integration.js';

export async function POST({ request }) {
  try {
    const sensorData = await request.json();
    
    // Submit to JA4 Atlas
    const result = await submitSensorData({
      ...sensorData,
      timestamp: new Date().toISOString()
    });
    
    return json({
      success: true,
      message: 'Sensor data submitted successfully',
      atlas_response: result
    });
  } catch (error) {
    console.error('Sensor data submission error:', error);
    return json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function GET() {
  return json({
    status: 'online',
    sensor_id: 'starphone-sensor-001',
    endpoint: '/api/sensor-data',
    message: 'Use POST to submit sensor data'
  });
}
