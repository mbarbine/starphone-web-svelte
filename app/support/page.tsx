'use client';

import { useEffect, useState } from 'react';

export default function SupportPage() {
  const [sensorData, setSensorData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/sensor-data')
      .then(res => res.json())
      .then(data => setSensorData(data))
      .catch(err => console.error('Failed to load sensor data:', err));
  }, []);

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Support</h1>
      
      <section>
        <h2>Technical Support</h2>
        <p>Need help? Our support team is here to assist you.</p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1-540-671-1261">+1-540-671-1261</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@thestarphone.com">support@thestarphone.com</a>
        </p>
      </section>

      {sensorData && (
        <section style={{ marginTop: '3rem' }}>
          <h2>System Status</h2>
          <div style={{ background: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
            <p><strong>Temperature:</strong> {sensorData.temperature?.toFixed(1)}°C</p>
            <p><strong>Humidity:</strong> {sensorData.humidity?.toFixed(1)}%</p>
            <p><strong>Pressure:</strong> {sensorData.pressure?.toFixed(1)} hPa</p>
            <p><strong>Last Updated:</strong> {new Date(sensorData.timestamp).toLocaleString()}</p>
          </div>
        </section>
      )}
    </div>
  );
}
