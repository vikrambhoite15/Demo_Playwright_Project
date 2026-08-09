
import {expect, test} from "@playwright/test";

test('assertion demo', async ({page})=>{
    
//1. Auto-retrying assertion:(automatically retires until it passes or time out)

   await page.goto("https://demowebshop.tricentis.com/");
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

//auto retry: waits for the element to be visible and have the expected text
    await expect(page.getByText('Welcome to our store')).toBeVisible();

//2. Non-retrying assertion:(executes immediately, no retry)

    const title= await page.title();
    expect(title.includes("Demo Web Shop")).toBeTruthy();

    const text= await page.getByText('Welcome to our store').textContent();
    expect(text).toContain('Welcome');

//Negative matcher:(applicable for both auto-retrying & non-retrying assertions)
   
    //await expect(page.getByText('Welcome to our store')).not.toBeVisible();
    // expect(text).not.toContain('Welcome');
});