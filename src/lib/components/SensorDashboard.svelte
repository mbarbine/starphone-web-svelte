<script>
  import { onMount } from 'svelte';
  import { submitSensorData } from '$lib/services/ja4-integration.js';
  
  let sensorData = {
    temperature: null,
    humidity: null,
    network_status: 'checking...',
    last_updated: null
  };
  
  let submissionStatus = '';
  let isLoading = false;
  
  // Simulate sensor data collection (in production, this would come from actual IoT sensors)
  async function collectSensorData() {
    isLoading = true;
    try {
      // In production, this would fetch from actual sensor hardware
      // For now, we'll use simulated data
      const mockData = {
        temperature: (Math.random() * 20 + 15).toFixed(1), // 15-35°C
        humidity: (Math.random() * 40 + 40).toFixed(1), // 40-80%
        pressure: (Math.random() * 50 + 990).toFixed(0), // 990-1040 hPa
        air_quality: Math.floor(Math.random() * 100), // 0-100 AQI
        noise_level: Math.floor(Math.random() * 40 + 40), // 40-80 dB
        network_status: 'online',
        location: 'starbase-tx'
      };
      
      sensorData = {
        ...mockData,
        last_updated: new Date().toLocaleString()
      };
      
      return mockData;
    } catch (error) {
      console.error('Failed to collect sensor data:', error);
      sensorData.network_status = 'error';
    } finally {
      isLoading = false;
    }
  }
  
  async function submitToAtlas() {
    if (!sensorData.temperature) {
      submissionStatus = 'Please collect sensor data first';
      return;
    }
    
    isLoading = true;
    submissionStatus = 'Submitting to JA4 Atlas...';
    
    try {
      await submitSensorData(sensorData);
      submissionStatus = 'Successfully submitted to JA4 Atlas!';
      setTimeout(() => submissionStatus = '', 3000);
    } catch (error) {
      submissionStatus = `Error: ${error.message}`;
    } finally {
      isLoading = false;
    }
  }
  
  onMount(() => {
    // Auto-collect on mount
    collectSensorData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(collectSensorData, 30000);
    return () => clearInterval(interval);
  });
</script>

<div class="sensor-dashboard">
  <h3>Starphone Environmental Sensor</h3>
  
  <div class="sensor-grid">
    <div class="sensor-card">
      <div class="sensor-icon">🌡️</div>
      <div class="sensor-label">Temperature</div>
      <div class="sensor-value">
        {#if sensorData.temperature}
          {sensorData.temperature}°C
        {:else}
          --
        {/if}
      </div>
    </div>
    
    <div class="sensor-card">
      <div class="sensor-icon">💧</div>
      <div class="sensor-label">Humidity</div>
      <div class="sensor-value">
        {#if sensorData.humidity}
          {sensorData.humidity}%
        {:else}
          --
        {/if}
      </div>
    </div>
    
    <div class="sensor-card">
      <div class="sensor-icon">🌐</div>
      <div class="sensor-label">Network</div>
      <div class="sensor-value status-{sensorData.network_status}">
        {sensorData.network_status}
      </div>
    </div>
    
    <div class="sensor-card">
      <div class="sensor-icon">⏰</div>
      <div class="sensor-label">Last Update</div>
      <div class="sensor-value small">
        {sensorData.last_updated || 'Never'}
      </div>
    </div>
  </div>
  
  <div class="sensor-actions">
    <button on:click={collectSensorData} disabled={isLoading} class="btn-primary">
      {isLoading ? 'Collecting...' : 'Refresh Data'}
    </button>
    <button on:click={submitToAtlas} disabled={isLoading} class="btn-secondary">
      Submit to JA4 Atlas
    </button>
  </div>
  
  {#if submissionStatus}
    <div class="status-message" class:error={submissionStatus.includes('Error')}>
      {submissionStatus}
    </div>
  {/if}
  
  <div class="sensor-info">
    <p>
      <strong>Sensor ID:</strong> starphone-sensor-001<br>
      <strong>Location:</strong> Starbase, TX<br>
      <strong>Data submitted to:</strong> <a href="https://ja4-atlas.platphormnews.com" target="_blank">JA4 Atlas</a>
    </p>
  </div>
</div>

<style>
  .sensor-dashboard {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 2rem;
    color: white;
    margin: 2rem 0;
  }
  
  .sensor-dashboard h3 {
    margin: 0 0 1.5rem 0;
    text-align: center;
    font-size: 1.5rem;
  }
  
  .sensor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .sensor-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .sensor-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .sensor-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  
  .sensor-value {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .sensor-value.small {
    font-size: 0.85rem;
  }
  
  .sensor-value.status-online {
    color: #4ade80;
  }
  
  .sensor-value.status-offline {
    color: #f87171;
  }
  
  .sensor-value.status-checking {
    color: #fbbf24;
  }
  
  .sensor-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .btn-primary {
    background: white;
    color: #667eea;
  }
  
  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn-secondary:hover:not(:disabled) {
    background: white;
    color: #667eea;
  }
  
  .status-message {
    text-align: center;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  
  .status-message.error {
    background: rgba(239, 68, 68, 0.3);
  }
  
  .sensor-info {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    opacity: 0.9;
  }
  
  .sensor-info a {
    color: white;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .sensor-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .sensor-actions {
      flex-direction: column;
    }
  }
</style>
