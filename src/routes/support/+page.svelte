<script>
	export let pageData;
</script>

<section class="support-page">
	<div class="container">
		<h1>Support Starphone</h1>
		<p>
			Starphone is an open-source, community-driven project. We’re not just building technology—we’re building a future for secure, reliable public communication. You can help us make this vision a reality. Here’s how:
		</p>

		<h2>Ways to Support Us</h2>
		<ul>
			<li><strong>Patreon:</strong> Join our community of supporters and back us financially on Patreon. Your contributions help fund development and testing.</li>
			<li><strong>GitHub Sponsors:</strong> Contribute through GitHub Sponsors and help us keep Starphone open-source and freely accessible to everyone.</li>
			<li><strong>Spread the Word:</strong> Follow us on social media, share our progress, and help raise awareness about Starphone.</li>
			<li><strong>Contribute to Development:</strong> If you’re a developer, designer, or engineer, join us on GitHub and contribute directly to the project.</li>
		</ul>

		<div class="donation-buttons">
			<a href="https://www.patreon.com/ph3ar" target="_blank" class="button">Support via Patreon</a>
			<a href="https://github.com/ph3ar/starphone" target="_blank" class="button">Donate via GitHub</a>
		</div>
	</div>
</section>

<style>
	.support-page {
		padding: 60px 0;
		background-color: var(--background-dark);
		color: var(--text-light);
		text-align: center;
	}

	h1, h2 {
		color: var(--lcars-blue);
	}

	ul {
		list-style: none;
		padding-left: 0;
		text-align: left;
		max-width: 800px;
		margin: 0 auto;
	}

	ul li {
		margin-bottom: 20px;
		color: var(--lcars-grey);
	}

	.donation-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
	}

	.button {
		background-color: var(--lcars-orange);
		color: white;
		padding: 12px 24px;
		border-radius: 4px;
		text-decoration: none;
		transition: background-color 0.3s;
	}

	.button:hover {
		background-color: var(--lcars-accent);
	}
</style>
