<script>
	import { onMount, onDestroy } from 'svelte';
	import { Chart } from 'chart.js/auto'; // Auto imports controllers, elements, etc.
	import 'chartjs-adapter-date-fns'; // For time-based formatting

	let chart;

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
		const ctx = document.getElementById('timelineChart').getContext('2d');

		// Initialize the chart
		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels,
				datasets: [{
					label: 'History & Future of Telephones',
					data: labels.map((_, i) => i), // Sequential values for the timeline
					fill: false,
					borderColor: '#2a9fd6',
					pointBackgroundColor: '#f39c12',
					pointBorderColor: '#e74c3c',
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
	});

	// Cleanup when component is destroyed
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<section class="history-page">
	<div class="container">
		<h1>History & Future of the Telephone</h1>
		<p>Explore the timeline of the telephone, from its invention to the future of public communication with Starphone on Earth, the Moon, Mars, and beyond!</p>

		<!-- Timeline Chart -->
		<canvas id="timelineChart" width="600" height="400"></canvas>

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
	.history-page {
		padding: 60px 20px;
		background-color: #f5f5f5;
		color: #333;
	}

	.history-page h1 {
		font-size: 2.5rem;
		color: #2a9fd6;
		text-align: center;
		margin-bottom: 20px;
	}

	.history-page p {
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 40px;
		color: #666;
	}

	canvas {
		display: block;
		margin: 0 auto;
	}

	.timeline-events {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 40px;
	}

	.timeline-event {
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
		text-align: center;
	}

	.timeline-event h3 {
		font-size: 1.5rem;
		color: #2a9fd6;
		margin-bottom: 10px;
	}

	.timeline-event p {
		font-size: 1.1rem;
		color: #666;
	}
</style>
