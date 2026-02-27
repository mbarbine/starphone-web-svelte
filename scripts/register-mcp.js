// Use native fetch (Node 18+)
const MCP_REGISTRY_URL = 'https://mcp.platphormnews.com/api/mcp';

const payload = {
  name: 'Starphone',
  url: 'https://www.thestarphone.com',
  description: 'Secure, reliable public communication solutions for extreme environments. Features satellite uplinks, mesh networking, and AI-driven signal optimization.',
  endpoints: [
    {
      path: '/api/health',
      method: 'GET',
      description: 'Check API status and version'
    },
    {
      path: '/api/parrot',
      method: 'GET',
      description: 'Get party parrot frames or signal strength visualization'
    }
  ],
  contact: 'michael@barbvineworldwide.com',
  version: '0.0.2'
};

async function register() {
  console.log('Registering Starphone with MCP...');
  try {
    const response = await fetch(MCP_REGISTRY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Starphone-Deploy-Script/1.0'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Registration successful:', data);
    } else {
      const text = await response.text();
      console.warn('⚠️ Registration returned status', response.status, text);
    }
  } catch (error) {
    console.error('❌ Registration failed:', error.message);
  }
}

register();
