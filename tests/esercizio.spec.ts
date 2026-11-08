import { test, expect } from '@playwright/test';

test('titolo', async ({ page }) => {
  await page.goto('https://linkraider.com');  
  await expect(page).toHaveTitle(/linkraider/);
});