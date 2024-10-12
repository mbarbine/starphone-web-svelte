<!-- src/lib/components/TeamMemberCard.svelte -->
<script>
	export let name;
	export let role;
	export let description;
</script>

<div class="team-card">
	<h4>{name}</h4>
	<p><strong>{role}</strong></p>
	<p>{description}</p>
</div>

<style>
	.team-card {
		background-color: #fff;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.team-card:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	h4 {
		color: #0070f3;
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	p {
		font-size: 1rem;
		color: #333;
	}
</style>
