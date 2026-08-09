
import {test, expect} from "@playwright/test";

test('Xpath practice', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Relative xpath:
   //await page.locator("//a[text()='Udemy Courses']").click();
    
    //xpath with contains():

   // await page.locator("//a[contains(@href,'udemy')]").click();
   // //await page.locator("//input[contains(@placeholder, 'Name')]").fill("David Miller");

   //Xpath with starts-with():
   //Mateches element whose attribute value start with a specific string.

  // await page.locator("//input[starts-with(@id,'na')]").fill("Vijay chavan");
  // await page.locator("//input[starts-with(@class, 'wikipedia')]").nth(0).fill("Playwright");


  //xpath with text():

  //await page.locator("//a[text()='PlaywrightPractice']").click();

  //xpath using OR:

  //await page.locator("//input[@id='name' or @placeholder='Enter']").fill("Jonh micky");

  //xpath using AND:

    await page.locator("//input[@id='name' and @placeholder='Enter Nane']").fill("Jonh micky");







    await page.waitForTimeout(3000);
})