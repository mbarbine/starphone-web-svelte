<script>
    let formData = {
        name: '',
        email: '',
        message: ''
    };

    let submitted = false;
    let loading = false;

    const handleSubmit = async (event) => {
        event.preventDefault();
        loading = true;

        // Send form data to Formspree
        const response = await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            })
        });

        loading = false;
        if (response.ok) {
            submitted = true;
            formData = { name: '', email: '', message: '' };
        } else {
            alert("There was an issue submitting the form. Please try again.");
        }
    };
</script>

<section class="contact-section">
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions, ideas, or want to get involved with Starphone, feel free to reach out to us!</p>

        {#if submitted}
            <p class="success-message">Thank you! We’ve received your message and will get back to you shortly.</p>
        {:else}
            <form on:submit={handleSubmit} class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" bind:value={formData.name} required />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" bind:value={formData.email} required />
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="6" bind:value={formData.message} required></textarea>
                </div>

                <button type="submit" disabled={loading}>
                    {#if loading}Sending...{:else}Send Message{/if}
                </button>
            </form>
        {/if}
    </div>
</section>

<style>
    .contact-section {
        padding: 60px 20px;
        text-align: center;
        background-color: #f9f9f9;
    }

    .contact-section h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #0070f3;
    }

    .contact-section p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 40px;
    }

    .contact-form {
        max-width: 600px;
        margin: 0 auto;
    }

    .form-group {
        margin-bottom: 20px;
        text-align: left;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
    }

    .form-group input, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
    }

    .form-group textarea {
        resize: vertical;
    }

    button {
        background-color: #0070f3;
        color: white;
        border: none;
        padding: 12px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #005bb5;
    }

    .success-message {
        color: #28a745;
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>
