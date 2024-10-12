<script>
    // Any necessary imports or data fetching
  </script>
  
  <section class="support">
    <div class="container">
      <h1>Support Starphone</h1>
      <p>Your contribution can make a significant impact in bringing Starphone to life. Here are ways you can support us:</p>
      <div class="support-options">
        <div class="option">
          <h2>Patreon</h2>
          <p>Become a patron and support us with monthly contributions.</p>
          <a href="https://www.patreon.com/ph3ar" target="_blank" class="button">Support via Patreon</a>
        </div>
        <div class="option">
          <h2>GitHub</h2>
          <p>Contribute to our open-source codebase or make a one-time donation.</p>
          <a href="https://github.com/ph3ar/starphone" target="_blank" class="button">Donate via GitHub</a>
        </div>
        <div class="option">
          <h2>Join Us</h2>
          <p>Be a part of our community. Collaborate, contribute, and innovate with us.</p>
          <a href="/contact" class="button">Get Involved</a>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .support {
      padding: 80px 0;
      background-color: var(--background-dark);
      color: var(--text-light);
    }
  
    .support h1 {
      text-align: center;
      color: var(--lcars-blue);
      margin-bottom: 40px;
    }
  
    .support-options {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  
    .option {
      flex: 1;
      background-color: var(--lcars-grey);
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
  
    .option h2 {
      color: var(--lcars-blue);
      margin-bottom: 10px;
    }
  
    .option p {
      color: var(--background-dark);
      margin-bottom: 20px;
    }
  
    .option .button {
      background-color: var(--lcars-orange);
      color: var(--text-light);
    }
  
    .option .button:hover {
      background-color: var(--lcars-accent);
    }
  
    @media (max-width: 768px) {
      .support-options {
        flex-direction: column;
      }
    }
  </style>
  