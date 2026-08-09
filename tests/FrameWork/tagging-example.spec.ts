
import { test, expect } from "@playwright/test";

test('@smoke Verify saucedemo app ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());

});

test('Verify letskodit app', { tag: '@regression' }, async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");
    console.log(await page.title());

});

test('Verify testauto app', { tag: '@smoke' }, async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(await page.title());

});

test('Verify demo webshop app', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    console.log(await page.title());

});

/* 

1. Run all regression tests:
   npx playwright test ./tests/FrameWork/tagging-example.spec.ts --grep "@regression"

2. Run all smoke tests:
   npx playwright test ./tests/FrameWork/tagging-example.spec.ts --grep "@smoke" 

3.Run test which belong to either smoke & regression:
  npx playwright test ./tests/FrameWork/tagging-example.spec.ts --grep "@smoke|@regression" 

4.Run the tests which are not belong to regression
  npx playwright test ./tests/FrameWork/tagging-example.spec.ts --grep-invert "@regression" 
  
5. Run the only smoke test which are not belong to regression
   npx playwright test ./tests/FrameWork/tagging-example.spec.ts --grep "@smoke" --grep-invert "@regression"

6. Configure tags in playwright.config.ts file:
   export default defineConfig({
      reporter: 'html',
      grep: /@smoke/,
});
*/
