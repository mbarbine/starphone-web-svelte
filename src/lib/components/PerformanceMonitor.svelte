<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let metrics = {
    fps: 0,
    memory: 0,
    loadTime: 0,
    domNodes: 0,
    errors: 0
  };
  
  let visible = false;
  let expanded = false;
  
  function toggleVisibility() {
    visible = !visible;
  }
  
  function toggleExpanded() {
    expanded = !expanded;
  }
  
  function updateMetrics() {
    if (!browser) return;
    
    // FPS calculation
    let lastTime = performance.now();
    let frames = 0;
    
    function countFrame() {
      frames++;
      const currentTime = performance.now();
      if (currentTime >= lastTime + 1000) {
        metrics.fps = Math.round(frames * 1000 / (currentTime - lastTime));
        frames = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(countFrame);
    }
    requestAnimationFrame(countFrame);
    
    // Memory usage (if available)
    if (performance.memory) {
      setInterval(() => {
        metrics.memory = Math.round(performance.memory.usedJSHeapSize / 1048576);
      }, 1000);
    }
    
    // DOM nodes count
    setInterval(() => {
      metrics.domNodes = document.getElementsByTagName('*').length;
    }, 2000);
    
    // Load time
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        metrics.loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
      }
    });
  }
  
  onMount(() => {
    updateMetrics();
    
    // Keyboard shortcut: Ctrl+Shift+P
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        toggleVisibility();
      }
    });
  });
</script>

{#if visible}
  <div class="performance-monitor" class:expanded>
    <div 
      class="monitor-header" 
      onclick={toggleExpanded}
      onkeydown={(e) => e.key === 'Enter' && toggleExpanded()}
      role="button"
      tabindex="0"
      aria-expanded={expanded}
      aria-label="Toggle performance monitor details"
    >
      <h4>⚡ Performance</h4>
      <button 
        onclick={(e) => {
          e.stopPropagation();
          toggleVisibility();
        }}
        onkeydown={(e) => {
          if (e.key === 'Enter') {
            e.stopPropagation();
            toggleVisibility();
          }
        }}
        class="close-btn"
        aria-label="Close performance monitor"
      >
        ×
      </button>
    </div>
    
    <div class="metrics">
      <div class="metric">
        <span class="label">FPS:</span>
        <span class="value" class:warning={metrics.fps < 30} class:error={metrics.fps < 20}>
          {metrics.fps}
        </span>
      </div>
      
      {#if metrics.memory > 0}
        <div class="metric">
          <span class="label">Memory:</span>
          <span class="value" class:warning={metrics.memory > 100} class:error={metrics.memory > 200}>
            {metrics.memory} MB
          </span>
        </div>
      {/if}
      
      {#if expanded}
        <div class="metric">
          <span class="label">Load Time:</span>
          <span class="value">
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div class="metric">
          <span class="label">DOM Nodes:</span>
          <span class="value" class:warning={metrics.domNodes > 1500}>
            {metrics.domNodes}
          </span>
        </div>
      {/if}
    </div>
    
    <div class="monitor-footer">
      <small>Press Ctrl+Shift+P to toggle</small>
    </div>
  </div>
{:else}
  <button class="monitor-toggle" on:click={toggleVisibility} title="Show Performance Monitor (Ctrl+Shift+P)">
    ⚡
  </button>
{/if}

<style>
  .performance-monitor {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    color: #0f0;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    padding: 10px;
    border-radius: 8px;
    z-index: 10000;
    min-width: 150px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
  
  .performance-monitor.expanded {
    min-width: 200px;
  }
  
  .monitor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    text-align: left;
  }
  
  .monitor-header:focus {
    outline: 2px solid #0f0;
    outline-offset: 2px;
  }
  
  .monitor-header h4 {
    margin: 0;
    font-size: 14px;
    color: #0f0;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: #0f0;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .close-btn:hover,
  .close-btn:focus {
    color: #f00;
    outline: 2px solid #f00;
    outline-offset: 2px;
  }
  
  .metrics {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .metric {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
  }
  
  .label {
    color: #888;
  }
  
  .value {
    color: #0f0;
    font-weight: bold;
  }
  
  .value.warning {
    color: #ff0;
  }
  
  .value.error {
    color: #f00;
  }
  
  .monitor-footer {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #333;
  }
  
  .monitor-footer small {
    color: #666;
    font-size: 10px;
  }
  
  .monitor-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #0f0;
    color: #0f0;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  
  .monitor-toggle:hover {
    background: rgba(0, 255, 0, 0.2);
    transform: scale(1.1);
  }
</style>
