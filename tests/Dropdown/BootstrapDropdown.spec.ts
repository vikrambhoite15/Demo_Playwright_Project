
import {test,expect} from "@playwright/test";

test('Bootsrap hidden dropdown', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Login steps
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    //click on the PIM
    await page.locator("//span[text()='PIM']").click();
    

    //click on sub unit dropdown
    await page.locator("form i").nth(2).click();
    await page.waitForTimeout(3000);

    //capture all the options from dropdown and count.
    const options= page.locator("div[role='listbox'] span");
    console.log("Number of Options:", await options.count());
    
   
    //print all the options

    for(let i=0;i< await options.count();i++){

        console.log(await options.nth(i).innerText());   

    }

 await page.waitForTimeout(5000);
    
});