<script>
    let formData = {
        name: '',
        email: '',
        message: '',
        location: '' // New field for "Where would you like to see a Starphone"
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
                message: formData.message,
                location: formData.location // Including location in form submission
            })
        });

        loading = false;
        if (response.ok) {
            submitted = true;
            formData = { name: '', email: '', message: '', location: '' };
        } else {
            alert("There was an issue submitting the form. Please try again.");
        }
    };
</script>

<section class="contact-section">
    <div class="container">
        <!-- Add Color Logo -->
        <img src="/images/starphone-main-logo-color.png" alt="Starphone Logo" class="logo" />

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

                <div class="form-group">
                    <label for="location">Where would you like to see a Starphone?</label>
                    <input type="text" id="location" bind:value={formData.location} required />
                </div>

                <button type="submit" disabled={loading} class="submit-button">
                    {#if loading}Sending...{:else}Send Message{/if}
                </button>
            </form>
        {/if}

        <!-- Donation Widget Section -->
        <div class="donation-section">
            <h2>Support Starphone</h2>
            <p>Your contribution helps us bring Starphone to life in more locations!</p>

            <div class="givebutter-donate">
                <givebutter-widget id="LYxbKj"></givebutter-widget>
                <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
            </div>
        </div>
    </div>
</section>

<style>
    .contact-section {
        padding: 60px 20px;
        text-align: center;
        background-color: #f9f9f9;
    }

    .contact-section .logo {
        max-width: 180px;
        margin-bottom: 20px;
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
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

    .submit-button {
        background-color: #0070f3;
        color: white;
        border: none;
        padding: 12px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .submit-button:hover {
        background-color: #005bb5;
        transform: scale(1.05);
    }

    .success-message {
        color: #28a745;
        font-size: 1.2rem;
        font-weight: bold;
    }

    /* Donation Section */
    .donation-section {
        margin-top: 60px;
    }

    .donation-section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #0070f3;
    }

    .donation-section p {
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: #555;
    }

    .givebutter-donate {
        margin-top: 20px;
    }

    /* Responsive design adjustments */
    @media (max-width: 768px) {
        .contact-form {
            padding: 20px;
        }

        .submit-button {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .contact-section h1 {
            font-size: 2rem;
        }

        .form-group input, .form-group textarea {
            font-size: 0.9rem;
        }

        .submit-button {
            font-size: 1rem;
        }
    }
</style>
