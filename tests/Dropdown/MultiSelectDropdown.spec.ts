
import {test,expect} from "@playwright/test";

test('Multi select dropdown', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1.scroll into locator
    await page.locator("#colors").scrollIntoViewIfNeeded();

    //2.select option from dropdown
    //await page.locator("#colors").selectOption(['Red','Blue','Green']); //using visible text
    //await page.locator("#colors").selectOption(['red','green','white']); //using value attribute
    //await page.locator("#colors").selectOption([{label:'Green'},{label:'White'}]); //using label
    //await page.locator("#colors").selectOption([{index:0},{index:2}]); //using index
   
    //3.Fetch the selected dropdown options
    //const value= await page.locator("#colors").inputValue();
    //console.log("Selected Option:", value);
    
    //4.check number of option in the dropdown(count)

    const options= page.locator("//select[@id='colors']//child:: option");
    console.log("Number of Options:",await options.count());
    await expect(options).toHaveCount(7);
    
    //check an option present in the dropdown

    const optionText:string[]=(await options.allTextContents()).map(text => text.trim());
    console.log(optionText);
    expect(optionText).toContain('Green'); //check if the array contains 'Green';


   //Printing an option from the dropdown

     for(const text of optionText){
        console.log(text);   
     }
   
   
    await page.waitForTimeout(3000);
});