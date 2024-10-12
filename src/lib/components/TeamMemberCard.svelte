<!-- src/lib/components/TeamMemberCard.svelte -->
<script>
    export let name;
    export let role;
    export let description;
    export let image = ''; // Optional: Add image for each team member
</script>

<div class="team-card">
    {#if image}
        <img src={image} alt={name} />
    {/if}
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

    .team-card img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 15px;
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

    strong {
        color: #0070f3;
    }
</style>
