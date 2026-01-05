import { json } from '@sveltejs/kit';

// In-memory storage for analytics (in production, use a database)
const analyticsData = [];
const MAX_STORED_EVENTS = 10000;

export async function POST({ request }) {
  try {
    const event = await request.json();
    
    // Add server timestamp
    event.serverTimestamp = new Date().toISOString();
    
    // Store event
    analyticsData.push(event);
    
    // Keep only recent events
    if (analyticsData.length > MAX_STORED_EVENTS) {
      analyticsData.shift();
    }
    
    // In production, you'd send this to your analytics service
    // e.g., Google Analytics, Mixpanel, Amplitude, etc.
    
    return json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  // Return aggregated analytics data
  const stats = {
    totalEvents: analyticsData.length,
    eventsByCategory: {},
    uniqueSessions: new Set(analyticsData.map(e => e.sessionId)).size,
    recentEvents: analyticsData.slice(-100)
  };
  
  // Group by category
  analyticsData.forEach(event => {
    if (!stats.eventsByCategory[event.category]) {
      stats.eventsByCategory[event.category] = 0;
    }
    stats.eventsByCategory[event.category]++;
  });
  
  return json(stats);
}
