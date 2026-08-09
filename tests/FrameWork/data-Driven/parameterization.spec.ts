import {test, expect} from "@playwright/test";

//Data Driven using Array of Object.

const searchItems:string[]=['laptop','Gift card','smartphone','monitor'];

for(const item of searchItems){

test (`search test for ${item}`, async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true});

});
};