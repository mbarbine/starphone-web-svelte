<script>
    let pressArticles = [
        {
            title: "Prototype Public Phone Exhibited at Starbase",
            date: "November 9, 2023",
            publication: "Port Isabel South Padre",
            link: "https://www.portisabelsouthpadre.com/2023/11/09/prototype-public-phone-exhibited-at-starbase/",
            image: "/images/MoneyShot.png"
        }
    ];
</script>

<section class="press-page">
    <div class="container">
        <h1>In the News</h1>
        <p>Explore recent articles about Starphone's journey in revolutionizing public communication technology.</p>
        <div class="press-grid">
            {#each pressArticles as article}
                <div class="press-card">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <img src={article.image} alt={article.title} class="press-image">
                        <div class="press-details">
                            <h3>{article.title}</h3>
                            <p>{article.publication} - {article.date}</p>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .press-page {
        background-color: #f5f5f5;
        padding: 80px 20px;
        color: #333;
    }

    .press-page h1 {
        font-size: 2.5rem;
        text-align: center;
        color: #2a9fd6;
        margin-bottom: 20px;
    }

    .press-page p {
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: #666;
    }

    .press-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .press-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        overflow: hidden; /* Ensure the card retains its shape */
    }

    .press-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .press-image {
        width: 100%;
        height: auto;
        display: block;
    }

    .press-details {
        padding: 15px;
    }

    .press-details h3 {
        font-size: 1.5rem;
        color: #2a9fd6;
        margin-bottom: 10px;
    }

    .press-details p {
        font-size: 1rem;
        color: #666;
    }

    @media (max-width: 768px) {
        .press-page h1 {
            font-size: 2rem;
        }

        .press-page p {
            font-size: 1.1rem;
        }

        .press-details h3 {
            font-size: 1.3rem;
        }

        .press-details p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .press-page h1 {
            font-size: 1.8rem;
        }

        .press-page p {
            font-size: 1rem;
        }

        .press-details h3 {
            font-size: 1.2rem;
        }

        .press-details p {
            font-size: 0.85rem;
        }
    }
</style>
