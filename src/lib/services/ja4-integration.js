// JA4 Atlas Integration for Starphone Sensor
// Environment sensor data collection and submission

const JA4_ATLAS_API_KEY = 'ja4_lmcVeIaQvy8SFnP7PUjI_lDUFEa0U_d-jVqMXfu8KMU';
const JA4_ATLAS_ENDPOINT = 'https://ja4-atlas.platphormnews.com/api/ingest';

export async function submitSensorData(sensorData) {
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      sensor_id: 'starphone-sensor-001',
      sensor_type: 'environmental',
      location: sensorData.location || 'starbase-tx',
      labels: {
        project: 'starphone',
        environment: 'production',
        sensor_type: 'iot-environmental',
        deployment: 'public-phone-booth'
      },
      data: {
        temperature: sensorData.temperature,
        humidity: sensorData.humidity,
        pressure: sensorData.pressure,
        air_quality: sensorData.air_quality,
        noise_level: sensorData.noise_level,
        network_status: sensorData.network_status,
        // JA4 fingerprint data if available
        ja4_fingerprint: sensorData.ja4_fingerprint,
        ja4s_fingerprint: sensorData.ja4s_fingerprint,
        ja4h_fingerprint: sensorData.ja4h_fingerprint
      }
    };

    const response = await fetch(JA4_ATLAS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JA4_ATLAS_API_KEY}`,
        'X-Sensor-ID': 'starphone-sensor-001',
        'X-Project': 'starphone'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`JA4 Atlas API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to submit sensor data to JA4 Atlas:', error);
    throw error;
  }
}

// Function to collect network fingerprint data
export async function collectJA4Fingerprint(request) {
  try {
    const headers = request.headers;
    
    // Extract relevant headers for JA4 fingerprinting
    const fingerprintData = {
      user_agent: headers.get('user-agent'),
      accept: headers.get('accept'),
      accept_encoding: headers.get('accept-encoding'),
      accept_language: headers.get('accept-language'),
      connection: headers.get('connection'),
      upgrade_insecure_requests: headers.get('upgrade-insecure-requests'),
      // TLS information if available
      tls_version: headers.get('x-forwarded-proto'),
      // Client IP
      client_ip: headers.get('x-forwarded-for') || headers.get('x-real-ip')
    };

    return fingerprintData;
  } catch (error) {
    console.error('Failed to collect JA4 fingerprint:', error);
    return null;
  }
}

// Batch submission for efficiency
export async function batchSubmitSensorData(sensorDataArray) {
  try {
    const batchPayload = {
      timestamp: new Date().toISOString(),
      sensor_id: 'starphone-sensor-001',
      batch: true,
      labels: {
        project: 'starphone',
        environment: 'production'
      },
      observations: sensorDataArray.map(data => ({
        timestamp: data.timestamp || new Date().toISOString(),
        ...data
      }))
    };

    const response = await fetch(`${JA4_ATLAS_ENDPOINT}/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JA4_ATLAS_API_KEY}`,
        'X-Sensor-ID': 'starphone-sensor-001'
      },
      body: JSON.stringify(batchPayload)
    });

    if (!response.ok) {
      throw new Error(`JA4 Atlas batch API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to batch submit sensor data:', error);
    throw error;
  }
}
