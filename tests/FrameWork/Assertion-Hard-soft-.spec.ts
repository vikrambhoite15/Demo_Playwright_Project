import {expect, test} from "@playwright/test";

/* Hard assertions:
  -Hard assertions means if any assertion got failed rest of the code will not executed.test will be terminated.

  soft assertions:
 -if any soft assertion got failed it is mark as failed but rest of code will executed.
*/


test(' Hard assertion demo', async ({page})=>{
    
    await page.goto("https://demowebshop.tricentis.com/");

    //hard assertions:
    await expect(page).toHaveTitle('Demo Web Sho2');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

    const logo=page.locator("//img[@alt='Tricentis Demo Web Shop']");

    await expect (logo).toBeVisible();

});

test('Soft assertion demo', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator("(//a[@href='/computers'])[1]").click();

    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/Computers");

    await expect.soft(page.locator("//img[@alt='Picture for category Desktops']")).toBeVisible();

    await expect.soft(page).toHaveTitle('Demo Web Shop. Computers');

});