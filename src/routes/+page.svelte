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
		<p class="hero-text">The future of public communication is here. Space-grade, Faraday-protected, and powered by hybrid networks. Join us on this journey to revolutionize how the world connects.</p>
		<a href="/about" class="cta-button">Learn More</a>
	</div>
</section>

<section class="section section-about">
	<div class="container">
		<h2>About Starphone</h2>
		<p>
			Starphone is an open-source initiative aimed at revolutionizing public communication. We’re creating a device that will stand the test of time, combining cutting-edge technology with a bold vision for the future of secure, reliable communication.
		</p>
		<a href="/about" class="button">Discover More</a>
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

<section class="section section-press">
	<div class="container">
		<h2>In the News</h2>
		<p>Check out the latest media coverage of Starphone.</p>
		<a href="/press" class="button">View Press Articles</a>
	</div>
</section>

<section class="section section-media">
	<div class="container">
		<h2>Follow Us</h2>
		<p>Stay updated with the latest from Starphone by following us on social media.</p>
		<div class="social-icons">
			<a href="https://x.com/Starphone" target="_blank">
				<img src="/icons/x.svg" alt="X">
			</a>
			<a href="https://instagram.com/Starphone" target="_blank">
				<img src="/icons/instagram.svg" alt="Instagram">
			</a>
		</div>
	</div>
</section>

<section class="section section-support">
	<div class="container">
		<h2>Support Starphone</h2>
		<p>Be part of something revolutionary. By supporting Starphone, you’re helping us create a new future for public communication. Your contributions make a real difference.</p>
		<div class="donation-buttons">
			<a href="/support" class="button">How to Support Us</a>
		</div>
	</div>
</section>

<footer>
	<div class="footer-content">
		<p>&copy; 2024 Starphone. All rights reserved.</p>
	</div>
</footer>

<style>
	:root {
		--lcars-blue: #2a9fd6;
		--lcars-orange: #f39c12;
		--lcars-grey: #95a5a6;
		--lcars-accent: #e74c3c;
		--background-dark: #2c3e50;
		--text-light: #ecf0f1;
		--primary-color: #ffffff;
		--button-hover: #ff6e40;
	}

	body {
		margin: 0;
		background-color: var(--background-dark);
		color: var(--primary-color);
		font-family: 'Roboto', sans-serif;
	}

	h1, h2, h3 {
		font-family: 'Montserrat', sans-serif;
	}

	.hero {
		background: var(--lcars-blue);
		padding: 120px 0;
		text-align: center;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero h1 {
		font-size: 4rem;
		margin-bottom: 20px;
		color: var(--primary-color);
	}

	.hero-text {
		font-size: 1.4rem;
		margin-bottom: 40px;
		color: var(--primary-color);
	}

	.cta-button {
		background-color: var(--lcars-accent);
		color: white;
		padding: 14px 30px;
		font-size: 1.3rem;
		border-radius: 8px;
		transition: background-color 0.3s;
		border: none;
		cursor: pointer;
	}

	.cta-button:hover {
		background-color: var(--button-hover);
	}

	.section {
		padding: 80px 0;
	}

	.section-about, .section-features, .section-media, .section-support {
		text-align: center;
	}

	.features-grid {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 30px;
		margin-top: 30px;
	}

	.feature {
		flex: 1;
		text-align: center;
		background-color: var(--lcars-grey);
		border-radius: 8px;
		padding: 20px;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.feature:hover {
		transform: translateY(-10px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}

	.feature h3 {
		color: var(--lcars-blue);
	}

	/* Press Section */
	.section-press {
		background-color: var(--lcars-grey);
		padding: 80px 20px;
		text-align: center;
	}

	.section-press h2 {
		font-size: 2.5rem;
		color: var(--lcars-blue);
		margin-bottom: 20px;
	}

	.section-press p {
		font-size: 1.2rem;
		color: var(--primary-color);
		margin-bottom: 40px;
	}

	/* Media Section */
	.social-icons {
		display: flex;
		justify-content: center;
		gap: 40px;
		margin-top: 20px;
	}

	.social-icons img {
		width: 50px;
		transition: transform 0.3s;
	}

	.social-icons img:hover {
		transform: scale(1.2);
	}

	/* Footer Styles */
	footer {
		background-color: var(--background-dark);
		padding: 40px 0;
		color: var(--text-light);
		text-align: center;
	}

	.footer-content {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>
