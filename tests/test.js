import { expect, test } from '@playwright/test';

test('home page has hero heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Phone Booth/i, level: 1 })).toBeVisible();
});

test('home page has Super Powers section', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Super Powers/i })).toBeVisible();
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About Starphone', level: 1 })).toBeVisible();
});

test('about page has Our Mission section', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();
});

test('contact page has expected h1', async ({ page }) => {
	await page.goto('/contact');
	await expect(page.getByRole('heading', { name: 'Get In Touch', level: 1 })).toBeVisible();
});

test('contact page has contact information', async ({ page }) => {
	await page.goto('/contact');
	await expect(page.getByRole('heading', { name: 'Contact Information' })).toBeVisible();
});

test('how-it-works page has expected h1', async ({ page }) => {
	await page.goto('/how-it-works');
	await expect(page.getByRole('heading', { name: 'How Starphone Works', level: 1 })).toBeVisible();
});

test('how-it-works page has Core Technologies section', async ({ page }) => {
	await page.goto('/how-it-works');
	await expect(page.getByRole('heading', { name: 'Core Technologies' })).toBeVisible();
});

test('history page has expected h1', async ({ page }) => {
	await page.goto('/history');
	await expect(page.getByRole('heading', { name: 'History & Future of Communication', level: 1 })).toBeVisible();
});

test('docs page has expected h1', async ({ page }) => {
	await page.goto('/docs');
	await expect(page.getByRole('heading', { name: 'Starphone API Documentation', level: 1 })).toBeVisible();
});

test('gallery page has expected h1', async ({ page }) => {
	await page.goto('/gallery');
	await expect(page.getByRole('heading', { name: 'Starphone Gallery', level: 1 })).toBeVisible();
});

test('press page has expected h1', async ({ page }) => {
	await page.goto('/press');
	await expect(page.getByRole('heading', { name: 'Press & Media', level: 1 })).toBeVisible();
});

test('support page has expected h1', async ({ page }) => {
	await page.goto('/support');
	await expect(page.getByRole('heading', { name: 'Support Starphone', level: 1 })).toBeVisible();
});

test('navigation links are present on home page', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('nav')).toBeVisible();
});

test('locale redirect works - /about redirects to /en/about', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveURL(/\/en\/about/);
	await expect(page.getByRole('heading', { name: 'About Starphone', level: 1 })).toBeVisible();
});
