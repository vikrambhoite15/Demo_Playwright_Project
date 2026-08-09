
import {test, expect, Locator} from "@playwright/test";

test('Autosuggest dropdown', async ({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.getByText('✕').click();
    
    await page.locator("(//input[@name='q'])[1]").fill("smart");
    await page.waitForTimeout(5000);
   
    const options:Locator= page.locator("ul>li>div>a");
    console.log("Number of suggested options:",await options.count());

   // Printing single suggesion options in the console
     
     console.log("single suggesion:",await options.nth(4).innerText());

   //Printing all the suggested options in the console

    console.log(await options.allTextContents()); //return in the form of array.
      

    for(let i=0;i<await options.count();i++){

        console.log(await options.nth(i).textContent());
    }
    
//select/click on the any one option
    
    await options.nth(3).click();

   await page.waitForTimeout(3000);
});

test('Search electronic', async ({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.getByText('✕').click();
    
    await page.locator("(//input[@name='q'])[1]").fill("electronic");
    await page.waitForTimeout(5000);

    const options=page.locator("ul>li");

    //count number of options
    console.log("Number of option:", await options.count());
    
    //print all option.
    const allText= await options.allTextContents();
    console.log(allText);

    for(const text of allText){
        console.log(text);
        
    }

    //select any option

    await options.nth(5).click();
    


});