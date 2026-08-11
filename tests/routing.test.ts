import { expect, test } from "@playwright/test"

test("root path redirects to the Starphone homepage", async ({ request }) => {
  const response = await request.get("/", { maxRedirects: 0 })

  expect(response.status()).toBe(307)
  expect(response.headers()["location"]).toBe("/en")
})

test("non-localized product routes redirect to localized pages", async ({ request }) => {
  const response = await request.get("/gallery", { maxRedirects: 0 })

  expect(response.status()).toBe(307)
  expect(response.headers()["location"]).toBe("/en/gallery")
})

test("localized homepage renders the Starphone product experience", async ({ page }) => {
  await page.goto("/en")

  await expect(page.getByRole("heading", { name: /The Phone Booth/i })).toBeVisible()
  await expect(page.getByRole("link", { name: /See It In Action/i })).toHaveAttribute(
    "href",
    "/gallery",
  )
})
