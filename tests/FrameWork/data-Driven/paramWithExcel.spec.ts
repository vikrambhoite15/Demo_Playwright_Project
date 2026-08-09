
import {test,expect} from "@playwright/test";

//Pre: need to install xlsx

import { ExcelFileReader } from "./ExcelFileReader";

const logindata=ExcelFileReader.readExcel("testData/testdataExcel.xlsx","loginData");

for(const data of logindata){

 // console.log(data);
 
test(`Login test with ${data.check}`, async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(data.username);
    await page.locator("#password").fill(data.password);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
    
    if(data.Expect=='success'){
        const name= page.locator("span[class='title']");
        await expect(name).toBeVisible();   
    }
    else{
         const error=page.locator("//h3[@data-test='error']");
        await expect(error).toBeVisible();
    };
    
});
}