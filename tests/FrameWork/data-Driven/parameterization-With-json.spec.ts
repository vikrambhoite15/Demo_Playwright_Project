import {test,expect} from "@playwright/test";

//Data Driven using Json of Object:

import logindata from "../../testData/logindata.json";


for(const data of logindata){
test(`Login test with ${data.check}`, async ({page})=>{

    //test.skip(data.check=="inValid username & invalid password", `Login with ${data.check}`);
    //test.skip(data.tag=='@negative');
    
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(data.username);
    await page.locator("#password").fill(data.password);
    await page.locator("#login-button").click();

    if(data.expect=='success'){
        const name= page.locator("span[class='title']");
        await expect(name).toBeVisible();
    }
    else{
        const error=page.locator("//h3[@data-test='error']");
        await expect(error).toBeVisible();
    };

    
});
}