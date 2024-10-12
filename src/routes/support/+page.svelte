<script>
	export let pageData;
</script>

<section class="support-page">
	<div class="container">
		<h1>Support the Revolution in Public Communication</h1>
		<p>
			With Starphone, we’re not just building phones. We’re building a future for secure, reliable, and open communication. 
			Help us create a world where everyone—on Earth and beyond—can stay connected, even in the harshest environments. 
		</p>

		<!-- Social Proof: Add testimonials -->
		<div class="testimonials">
			<h2>What People Are Saying</h2>
			<div class="testimonial-grid">
				<div class="testimonial">
					<p>"Starphone will change how we communicate forever. Supporting this project is supporting the future of technology."</p>
					<cite>– Aurora Borealis, Lead Engineer</cite>
				</div>
				<div class="testimonial">
					<p>"As someone who believes in accessible communication for all, Starphone is exactly the kind of project we need."</p>
					<cite>– Thundercat 1, Creative Director</cite>
				</div>
			</div>
		</div>

		<!-- Emotional Appeal: Urgency to donate -->
		<div class="emotional-appeal">
			<h2>Your Support Makes a Difference</h2>
			<p>
				Imagine a future where public phones aren't relics of the past but tools for global and interplanetary communication. With your support, we can bring Starphone to cities, the Moon, and even Mars. 
				<strong>Your contribution helps build the future, one Starphone at a time.</strong>
			</p>
		</div>

		<!-- Donation Options -->
		<h2>How You Can Support Starphone</h2>
		<ul class="support-list">
			<li><strong>Patreon:</strong> Join our community of backers and gain exclusive behind-the-scenes access to our progress.</li>
			<li><strong>GitHub Sponsors:</strong> Directly fund the development of Starphone by sponsoring us on GitHub.</li>
			<li><strong>Givebutter:</strong> Make a one-time or recurring donation through Givebutter.</li>
			<li><strong>Spread the Word:</strong> Tell your friends, colleagues, and communities about Starphone and help us raise awareness.</li>
			<li><strong>Contribute:</strong> Are you a developer or engineer? Join us on GitHub to help bring Starphone to life.</li>
		</ul>

		<!-- Donation Buttons and Embeds -->
		<div class="donation-section">
			<div class="donation-buttons">
				<a href="https://www.patreon.com/ph3ar" target="_blank" class="button primary">Support via Patreon</a>
				<a href="https://github.com/ph3ar/starphone" target="_blank" class="button secondary">Sponsor on GitHub</a>
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

		<!-- Call to Action -->
		<div class="final-appeal">
			<h2>Help Us Change the Future</h2>
			<p>
				By supporting Starphone, you're not just donating to a project—you’re investing in the future of public communication. Every donation, no matter the size, helps us get closer to making Starphone a reality.
			</p>
			<a href="https://www.patreon.com/ph3ar" target="_blank" class="button final-cta">Donate Now</a>
		</div>
	</div>
</section>

<style>
	/* General Styling */
	.support-page {
		padding: 60px 20px;
		background-color: #1c1c1e;
		color: #f0f0f5;
		text-align: center;
	}

	h1, h2 {
		color: #ff3e00;
		font-size: 2.8rem;
		margin-bottom: 20px;
	}

	p {
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto 40px;
		line-height: 1.6;
		color: #f0f0f5;
	}

	/* Testimonials */
	.testimonials {
		margin: 60px 0;
	}

	.testimonials h2 {
		font-size: 2rem;
		color: #ff3e00;
		margin-bottom: 30px;
	}

	.testimonial-grid {
		display: flex;
		gap: 30px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.testimonial {
		background-color: #f0f0f5;
		color: #333;
		padding: 20px;
		border-radius: 10px;
		width: 300px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: left;
	}

	.testimonial p {
		font-size: 1rem;
		margin-bottom: 10px;
	}

	.testimonial cite {
		font-size: 0.9rem;
		color: #666;
	}

	/* Donation Buttons */
	.donation-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 40px;
	}

	.button {
		padding: 12px 24px;
		border-radius: 6px;
		font-size: 1.1rem;
		color: white;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.button.primary {
		background-color: #ff3e00;
	}

	.button.secondary {
		background-color: #4075a6;
	}

	.button:hover {
		opacity: 0.9;
	}

	/* GitHub and Givebutter */
	.github-sponsor, .givebutter-donate {
		margin-bottom: 40px;
	}

	/* Final Call to Action */
	.final-appeal {
		background-color: #f0a500;
		color: #1c1c1e;
		padding: 40px;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		margin-top: 60px;
	}

	.final-appeal h2 {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}

	.final-appeal p {
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto 30px;
		color: #1c1c1e;
	}

	.final-cta {
		background-color: #1c1c1e;
		color: #f0f0f5;
		padding: 14px 28px;
		border-radius: 4px;
		text-decoration: none;
		font-weight: bold;
	}

	.final-cta:hover {
		background-color: #333;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		h1, h2 {
			font-size: 2.2rem;
		}

		.testimonial-grid {
			flex-direction: column;
			gap: 20px;
		}

		.donation-buttons {
			flex-direction: column;
		}
	}
</style>
