
import {test, expect} from "@playwright/test";

import testData from "../../testData/loignwithScenario.json";

test(`Login test with ${testData.validData.check}`, async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(testData.validData.username);
    await page.locator("#password").fill(testData.validData.password);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
    
    const name= page.locator("span[class='title']");
    await expect(name).toBeVisible();   
});

test(`Login test with ${testData.invalidData.check}`, async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(testData.invalidData.username);
    await page.locator("#password").fill(testData.invalidData.password);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);

    const error=page.locator("//h3[@data-test='error']");
    await expect(error).toBeVisible();

});
