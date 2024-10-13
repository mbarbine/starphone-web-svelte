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
        const response = await fetch('https://formspree.io/f/xovqqekl', {
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
    /* Contact Section */
    .contact-section {
        padding: 60px 20px;
        text-align: center;
        background-color: var(--color-light-bg);
        color: var(--color-text);
    }

    .contact-section h1 {
        font-size: var(--font-size-heading1);
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    .contact-section p {
        font-size: var(--font-size-large);
        margin-bottom: 40px;
        color: var(--color-text-light);
    }

    /* Form Styling */
    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        background-color: var(--color-background);
        padding: 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    .form-group {
        margin-bottom: 20px;
        text-align: left;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
        color: var(--color-text);
    }

    .form-group input, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: var(--border-radius);
        font-size: 1rem;
        font-family: var(--font-primary);
        color: var(--color-text);
        background-color: var(--color-light-bg);
    }

    .form-group input:focus, .form-group textarea:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(0, 100, 148, 0.2);
    }

    .form-group textarea {
        resize: vertical;
    }

    /* Button Styling */
    button {
        background-color: var(--color-primary);
        color: var(--color-button-text);
        padding: 12px 20px;
        border: none;
        font-size: var(--font-size-large);
        cursor: pointer;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-speed) ease;
        font-family: var(--font-secondary);
    }

    button:disabled {
        background-color: var(--color-primary-dark);
        cursor: not-allowed;
    }

    button:hover:not([disabled]) {
        background-color: var(--color-primary-dark);
    }

    .success-message {
        font-size: var(--font-size-large);
        color: #28a745;
        font-weight: bold;
    }
</style>
