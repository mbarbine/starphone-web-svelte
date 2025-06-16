<script context="module">
    import { render } from '@testing-library/svelte';
    import Page from './+page.svelte';

    // Run tests asynchronously upon module evaluation
    async function runTests() {
        try {
            // Render the page with dummy pageData prop if needed
            const { getByText } = render(Page, { props: { pageData: {} } });

            // Hero Section test
            getByText("Welcome to Starphone");
            console.log("Hero Section test passed");

            // Origin Section test
            getByText("Our Journey: From PH3AR to Starphone");
            console.log("Origin Section test passed");

            // Technology Section test
            getByText("The Technology Behind Starphone");
            console.log("Technology Section test passed");

            // Community Section test
            getByText("PH3AR: Community & Collaboration");
            console.log("Community Section test passed");

            // Team Section test
            getByText("The Team Behind Starphone");
            console.log("Team Section test passed");

            // Call to Action Section test
            getByText("Join the Movement");
            console.log("Call to Action Section test passed");

            console.log("All tests passed successfully!");
        } catch (error) {
            console.error("Some tests failed:", error);
        }
    }

    runTests();
</script>

<main>
    <h1>Running tests for +page.svelte</h1>
    <p>Please check the browser console for test results.</p>
</main>