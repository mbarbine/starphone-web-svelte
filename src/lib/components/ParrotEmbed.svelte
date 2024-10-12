<script>
    let parrotData = '';
    const fetchParrot = async () => {
        const response = await fetch('/api/parrot');
        parrotData = await response.text();
    };

    // Fetch the parrot ASCII when the component is mounted
    fetchParrot();
</script>

<pre class="parrot-animation">
    {parrotData}
</pre>

<style>
    .parrot-animation {
        white-space: pre-wrap;
        font-family: monospace;
        background-color: #121212;
        color: #00ff00; /* Retro terminal green */
        padding: 20px;
        border-radius: 8px;
        overflow-x: auto;
        max-width: 100%;
    }
</style>
