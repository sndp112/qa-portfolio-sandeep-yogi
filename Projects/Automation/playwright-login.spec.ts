import { test, expect } from '@playwright/test';

test('valid login test', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.fill('#email','test@gmail.com');
  await page.fill('#password','123456');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);

});
