import { test, expect } from '@playwright/test';

test('First Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=GET STARTED').click();
  await expect(page).toHaveTitle(/Getting started/);
});

test('Second Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});