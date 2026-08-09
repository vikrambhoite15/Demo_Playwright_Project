
import {test} from "@playwright/test";

//fixture: means global variable.(page,browser)

test('Verify saucedemo page', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log("Title:",await page.title());
    
});

test('Verify automation page', async ({page},testInfo)=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Title:", await page.title());
    console.log(testInfo.title);
    console.log(testInfo.status);
    console.log(testInfo.duration);
    
    
    
    
});

test('Verify letskodeit practice pagre', async ({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    console.log("Title:",await page.title());
    
});