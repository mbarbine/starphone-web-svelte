<script>
	import { onMount } from 'svelte';
	import '../lib/styles/global.css'; // Importing your global CSS here
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
