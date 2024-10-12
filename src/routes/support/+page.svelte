<script>
	export let pageData;
</script>

<section class="support-page">
	<div class="container">
		<h1>Support the Future of Public Communication</h1>
		<p>
			At Starphone, we're not just building devices, we’re creating a future for secure, reliable communication for everyone. Your support drives innovation, testing, and the development of open-source public communication technology. Help us bring Starphone to communities across the globe, from cities to the stars!
		</p>

		<!-- Ways to Support Section -->
		<h2>Ways to Support Us</h2>
		<ul class="support-list">
			<li><strong>Patreon:</strong> Become a backer on Patreon to help us fund testing, design, and future improvements.</li>
			<li><strong>GitHub Sponsors:</strong> Support us directly through GitHub Sponsors to keep Starphone open-source and accessible to everyone.</li>
			<li><strong>Givebutter:</strong> Make a one-time or recurring donation using the Givebutter widget below.</li>
			<li><strong>Spread the Word:</strong> Share our vision with your friends and community to help raise awareness.</li>
			<li><strong>Contribute:</strong> Are you a developer or engineer? Help shape the future of Starphone by contributing to our GitHub project.</li>
		</ul>

		<!-- Donation Buttons and Embeds -->
		<div class="donation-section">
			<div class="donation-buttons">
				<a href="https://www.patreon.com/ph3ar" target="_blank" class="button">Support via Patreon</a>
				<a href="https://github.com/ph3ar/starphone" target="_blank" class="button">Sponsor on GitHub</a>
			</div>

			<!-- GitHub Sponsor Embed -->
			<div class="github-sponsor">
				<iframe src="https://github.com/sponsors/ph3ar/card" title="Sponsor ph3ar" height="225" width="600" style="border: 0;"></iframe>
			</div>

			<!-- Givebutter Embed -->
			<div class="givebutter-donate">
				<script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
			</div>
		</div>
	</div>
</section>

<style>
	.support-page {
		padding: 60px 20px;
		background-color: #1c1c1e;
		color: #f0f0f5;
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		font-size: 2.8rem;
		margin-bottom: 20px;
	}

	h2 {
		color: #4075a6;
		font-size: 2rem;
		margin-bottom: 30px;
	}

	p {
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto 40px;
		line-height: 1.6;
		color: #f0f0f5;
	}

	.support-list {
		list-style: none;
		padding-left: 0;
		text-align: left;
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.1rem;
	}

	.support-list li {
		margin-bottom: 20px;
		color: #f0f0f5;
	}

	.donation-section {
		margin-top: 40px;
	}

	.donation-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 40px;
	}

	.button {
		background-color: #ff3e00;
		color: white;
		padding: 12px 24px;
		border-radius: 4px;
		font-size: 1.1rem;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.button:hover {
		background-color: #e64a19;
	}

	.github-sponsor {
		margin-bottom: 40px;
	}

	.givebutter-donate {
		margin-bottom: 40px;
	}

	/* Responsive Styling */
	@media (max-width: 768px) {
		h1 {
			font-size: 2.2rem;
		}

		h2 {
			font-size: 1.6rem;
		}

		p {
			font-size: 1.1rem;
		}

		.donation-buttons {
			flex-direction: column;
			gap: 10px;
		}

		.github-sponsor iframe, .givebutter-donate iframe {
			width: 100%;
		}
	}
</style>
