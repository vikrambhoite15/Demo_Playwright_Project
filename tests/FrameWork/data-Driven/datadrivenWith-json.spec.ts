import {test,expect} from "@playwright/test";

import loginCredentials from "../../../testData/loginCredentials.json";

for(const data of loginCredentials){

test(`login test with ${data.check}`, async ({page})=>{
    
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill(data.username);
    await page.locator("#loginpassword").fill(data.password);
    await page.locator("//button[@onclick='logIn()']").click();
    await page.waitForTimeout(3000);

    if(data.expect=='success'){
    await expect(page.locator("#logout2")).toBeVisible();
    }
    else{
    page.on('dialog',async dialog=>{

        const message=dialog.message();
        expect(message).toBeTruthy();
    });
    await page.locator("//button[@onclick='logIn()']").click();
   }
 await page.waitForTimeout(3000);
});
};