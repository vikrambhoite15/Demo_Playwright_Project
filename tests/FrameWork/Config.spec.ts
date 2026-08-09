
import {test, expect} from "@playwright/test";

test ('verify saucedemo title', async ({page})=>{
     
   await page.goto('https://www.saucedemo.com/');
 
   const title= await page.title();
   console.log(title);  

   expect(title).toBe("Swag Labs");

  await page.waitForTimeout(3000);

});

test ('verify saucedemo URL', async ({page})=>{
     
   await page.goto('https://www.saucedemo.com/');

   const url= page.url();
   console.log(url);  

   expect (url).toBe('https://www.saucedemo.com/');
  await page.waitForTimeout(3000);

});

// test ('verify Base URL', async ({page})=>{
     
//    await page.goto('/product/learn');

//   await page.waitForTimeout(5000);

// });