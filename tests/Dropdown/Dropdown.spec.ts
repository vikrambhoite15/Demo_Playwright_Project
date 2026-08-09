
import {test ,expect, Page,Browser} from "@playwright/test";


test('single select dropdown', async ({page})=>{
    
     await page.goto("https://testautomationpractice.blogspot.com/");

     //scroll into locator.
     await page.locator("#colors").scrollIntoViewIfNeeded();

    //select option from dropdown
    //await page.locator("#country").selectOption('India');
    //await page.locator("#country").selectOption({value:'uk'});
    //await page.locator("#country").selectOption({index:5});
    //await page.locator("#country").selectOption({label:'Brazil'});

    //Fetch the value of selected dropdown and assert
    const selectopt= await page.locator("#country").inputValue();
    console.log(selectopt);  
    

    //check number of options in dropdown(count).
      const options= page.locator("#country>option");
      console.log("Option Count:",await options.count());
      await expect(options).toHaveCount(10);

    //check an option present in the dropdown
    //all option have  edge spaces, so we use map.
     const optionText= (await options.allTextContents()).map(text =>text.trim());
     console.log(optionText);
     
     expect(optionText).toContain('India');  //check if the array contains 'India'

     //printing all options in text.
      for(const text of optionText){
         console.log(text);  
       }
    
    await page.waitForTimeout(3000);
});

