<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import 'chartjs-adapter-date-fns'; // For time-based formatting
	import '../../lib/styles/global.css';  // Ensure correct path to globals

	let chart: Chart | null = null;

	// Extended Timeline Data: History + Future Projections
	const timelineData = [
		{ date: '1876', event: 'Invention of the Telephone' },
		{ date: '1889', event: 'First Public Telephone Installed in Connecticut' },
		{ date: '1900s', event: 'Expansion of Telephone Networks Worldwide' },
		{ date: '1960s', event: 'Public Telephones Become Common in Cities' },
		{ date: '1980s', event: 'Peak of Public Telephone Usage' },
		{ date: '2000s', event: 'Decline of Public Telephones with Mobile Phones' },
		{ date: '2020s', event: 'Public Telephones Phased Out in Many Cities' },
		{ date: '2024', event: 'Introduction of Starphone: The Next Evolution' },
		{ date: '2026', event: 'Starphone Network Expanded Across Major Cities' },
		{ date: '2030', event: 'Starphones Installed on the Moon (Lunar Base)' },
		{ date: '2035', event: 'First Starphone Launched to Mars Colonies' },
		{ date: '2040', event: 'Space Stations Equipped with Starphones' },
		{ date: '2050', event: 'Interplanetary Communication Powered by Starphone' }
	];

	const labels = timelineData.map(d => d.date);
	const events = timelineData.map(d => d.event);

	onMount(() => {
		const canvas = document.getElementById('timelineChart') as HTMLCanvasElement;
		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				// Initialize the chart
				chart = new Chart(ctx, {
					type: 'line',
					data: {
						labels,
						datasets: [{
							label: 'History & Future of Telephones',
							data: labels.map((_, i) => i),
							fill: false,
							borderColor: 'var(--color-primary)',
							pointBackgroundColor: 'var(--color-secondary)',
							pointBorderColor: 'var(--color-accent)',
							tension: 0.4 // Smoothens the line
						}]
					},
					options: {
						scales: {
							x: {
								type: 'time',
								time: {
									unit: 'year',
									displayFormats: {
										year: 'YYYY'
									}
								}
							},
							y: {
								beginAtZero: true,
								display: false // Hide y-axis since it's just for placement
							}
						},
						plugins: {
							tooltip: {
								callbacks: {
									label: (tooltipItem) => `${events[tooltipItem.dataIndex]} (${labels[tooltipItem.dataIndex]})`
								}
							}
						}
					}
				});
			}
		}
	});

	// Cleanup when component is destroyed
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<!-- Page structure -->
<section class="history-page">
	<div class="container">
		<h1>History & Future of the Telephone</h1>
		<p>Explore the timeline of the telephone, from its invention to the future of public communication with Starphone on Earth, the Moon, Mars, and beyond!</p>

		<!-- Timeline Chart -->
		<canvas id="timelineChart" width="800" height="400"></canvas>

		<!-- Descriptive Milestones -->
		<div class="timeline-events">
			{#each timelineData as event}
				<div class="timeline-event">
					<h3>{event.date}</h3>
					<p>{event.event}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Use global color scheme and enhance responsiveness */
	.history-page {
		padding: 60px 20px;
		background-color: var(--color-background);
		color: var(--color-text);
		text-align: center;
	}

	.history-page h1 {
		font-size: 3rem;
		color: var(--color-primary);
		margin-bottom: 40px;
		font-family: 'Montserrat', sans-serif;
	}

	.history-page p {
		font-size: 1.5rem;
		color: var(--color-text-light);
		margin-bottom: 50px;
	}

	canvas {
		display: block;
		margin: 0 auto;
		background-color: white;
		border-radius: var(--border-radius);
		padding: 10px;
		box-shadow: var(--box-shadow);
	}

	.timeline-events {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
		margin-top: 60px;
	}

	.timeline-event {
		background-color: var(--color-light);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		padding: 30px;
		text-align: center;
		transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
	}

	.timeline-event:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.timeline-event h3 {
		font-size: 1.75rem;
		color: var(--color-primary);
		margin-bottom: 10px;
	}

	.timeline-event p {
		font-size: 1.1rem;
		color: var(--color-text-light);
	}

	/* Add media queries for better responsiveness */
	@media (max-width: 768px) {
		.history-page h1 {
			font-size: 2.5rem;
		}

		.history-page p {
			font-size: 1.3rem;
		}

		canvas {
			width: 100%;
			height: auto;
		}
	}

	@media (max-width: 480px) {
		.history-page h1 {
			font-size: 2rem;
		}

		.history-page p {
			font-size: 1.2rem;
		}

		.timeline-event h3 {
			font-size: 1.5rem;
		}
	}
</style>
