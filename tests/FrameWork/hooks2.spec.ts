/*
open app-- beforeAll()

login -- beforeEach()
  find products
logout-- afterEach()

login
  add product to cart
logout

close app -- afterAll()   
*/

import {Page, test} from "@playwright/test";

let page:Page;

test.beforeAll('Open app', async({browser})=>{
    page= await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

});

test.afterAll('Close app', async()=>{
    await page.close();
});

test.beforeEach('login', async ()=>{
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill('Vikk');
  await page.locator("#loginpassword").fill('vikram@123');
  await page.locator("//button[@onclick='logIn()']").click();
  await page.waitForTimeout(3000);
});

test.afterEach('logout', async ()=>{
  await page.locator("#logout2").click();
  
  
});

test('Find no of product', async ()=>{
  const product= page.locator("#tbodyid");
  console.log("Number of products:",await product.count());
  
});

test ('Add product to cart', async ()=>{
  await page.locator("//a[text()='Samsung galaxy s6']").click();

  page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept();
    
  });
  await page.locator("//a[@onclick='addToCart(1)']").click();
});
