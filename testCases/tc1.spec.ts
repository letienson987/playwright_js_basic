import { test, expect } from '@playwright/test';
// const LoginPage = require('../pages/LoginPage');
// const config = require('../config/config');


test('has title', async ({ page }) => {
  await page.goto('https://seniorautomationtest.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Home | Experienced Automation Testers");
});

test('get started link', async ({ page }) => {
  await page.goto('https://seniorautomationtest.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});