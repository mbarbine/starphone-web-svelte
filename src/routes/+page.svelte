<script>
	import { onMount } from 'svelte';

	let sections;

	onMount(() => {
		sections = document.querySelectorAll(".section");
		window.addEventListener("scroll", animateOnScroll);
	});

	function animateOnScroll() {
		const revealPoint = 150;
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			if (sectionTop < window.innerHeight - revealPoint) {
				section.classList.add("active");
			} else {
				section.classList.remove("active");
			}
		});
	}
</script>

<section class="hero">
	<div class="hero-content">
		<h1>Starphone</h1>
		<p>The future of public communication is here. Space-grade, Faraday-protected, and powered by hybrid networks. Starphone is a revolution in communication.</p>
		<a href="/about" class="cta-button">Learn More</a>
	</div>
</section>

<section class="section section-about">
	<div class="container">
		<h2>Join the Open-Source Revolution</h2>
		<p>
			Starphone is more than a device—it’s a vision for reliable, secure public communication in the harshest environments. Developed by the brilliant minds at PH3AR, Starphone combines cutting-edge technology with a commitment to improving public access to communication. Our project is open source, and you’re invited to join us!
		</p>
		<a href="/support" class="button">Support Starphone</a>
	</div>
</section>

<section class="section section-features">
	<div class="container">
		<h2>Why Starphone?</h2>
		<div class="features-grid">
			<div class="feature">
				<img src="/icons/faraday-cage.svg" alt="Faraday Cage Protection">
				<h3>Faraday Cage Protection</h3>
				<p>Ensuring your calls stay secure, even in high-electromagnetic environments.</p>
			</div>
			<div class="feature">
				<img src="/icons/hybrid-network.svg" alt="Hybrid Network">
				<h3>Hybrid Network</h3>
				<p>Seamlessly switching between satellite, cellular, and VoIP for constant connectivity.</p>
			</div>
			<div class="feature">
				<img src="/icons/space-grade.svg" alt="Space-Grade Engineering">
				<h3>Space-Grade Engineering</h3>
				<p>Built for durability in extreme conditions, from disaster zones to space missions.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-media">
	<div class="container">
		<h2>Follow Us</h2>
		<p>Stay updated with Starphone's journey. Follow us on social media!</p>
		<div class="social-media-icons">
			<a href="https://x.com/Starphone" target="_blank"><img src="/icons/x-logo.svg" alt="X (formerly Twitter)"></a>
			<a href="https://instagram.com/Starphone" target="_blank"><img src="/icons/instagram-logo.svg" alt="Instagram"></a>
		</div>
	</div>
</section>

<section class="section section-donate">
	<div class="container">
		<h2>Support the Starphone Project</h2>
		<p>Your support helps us bring this revolutionary technology to life. Join us by donating or contributing your skills to the project. Together, we can change the future of public communication.</p>
		<div class="donation-buttons">
			<a href="https://www.patreon.com/ph3ar" target="_blank" class="button">Support via Patreon</a>
			<a href="https://github.com/ph3ar/starphone" target="_blank" class="button">Donate via GitHub</a>
		</div>
	</div>
</section>

<style>
	/* LCARS-inspired colors */
	:root {
		--lcars-blue: #2a9fd6;
		--lcars-orange: #f39c12;
		--lcars-grey: #95a5a6;
		--lcars-accent: #e74c3c;
		--background-dark: #2c3e50;
		--text-light: #ecf0f1;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: var(--background-dark);
		color: var(--text-light);
		font-family: 'Roboto', sans-serif;
	}

	h1, h2, h3 {
		font-family: 'Montserrat', sans-serif;
	}

	.hero {
		background: var(--lcars-blue);
		padding: 100px 0;
		text-align: center;
	}

	.hero h1 {
		font-size: 4rem;
		margin-bottom: 20px;
		color: var(--text-light);
	}

	.hero p {
		font-size: 1.25rem;
		margin-bottom: 30px;
		color: var(--text-light);
	}

	.cta-button {
		background-color: var(--lcars-accent);
		color: white;
		border: none;
		padding: 12px 24px;
		font-size: 1.2rem;
		cursor: pointer;
		border-radius: 4px;
		transition: background-color 0.3s;
		text-decoration: none;
	}

	.cta-button:hover {
		background-color: var(--lcars-orange);
	}

	/* Sections */
	.section {
		padding: 80px 0;
		opacity: 0;
		transform: translateY(50px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	.section.active {
		opacity: 1;
		transform: translateY(0);
	}

	.section h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 20px;
		color: var(--lcars-blue);
	}

	.section p {
		text-align: center;
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto;
		color: var(--lcars-grey);
	}

	.button {
		display: inline-block;
		background-color: var(--lcars-orange);
		color: white;
		padding: 12px 24px;
		border-radius: 4px;
		text-decoration: none;
		transition: background-color 0.3s;
		margin-top: 20px;
	}

	.button:hover {
		background-color: var(--lcars-accent);
	}

	/* Features Grid */
	.features-grid {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		margin-top: 40px;
	}

	.feature {
		flex: 1;
		text-align: center;
	}

	.feature img {
		width: 80px;
		margin-bottom: 20px;
	}

	.feature h3 {
		color: var(--lcars-blue);
		font-size: 1.5rem;
	}

	.feature p {
		color: var(--lcars-grey);
		font-size: 1rem;
	}

	/* Social Media Section */
	.section-media {
		background-color: var(--lcars-grey);
		text-align: center;
	}

	.social-media-icons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
	}

	.social-media-icons a img {
		width: 40px;
		transition: transform 0.3s ease;
	}

	.social-media-icons a:hover img {
		transform: scale(1.1);
	}

	/* Donation Section */
	.section-donate {
		background-color: var(--lcars-accent);
	}

	.section-donate p {
		color: var(--text-light);
	}

	.donation-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
	}
</style>
