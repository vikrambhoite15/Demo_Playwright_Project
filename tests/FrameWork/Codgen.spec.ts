import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

//commands:
// npx playwright codgen
// npx playwright codegen -o ./tests/WithTestFramework/newBasic/codegen.spec.ts --> save code in file.