
import {test, expect, Locator} from "@playwright/test";

test ('Comparing methods', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/") 

    const product:Locator= page.locator("h2[class='product-title']");

    //1. innerText() vs textcontext()

   // console.log(await product.nth(2).innerText()); // it extracts plain text. Eliminates whitespace and line breaks.
   // console.log(await product.nth(2).textContent());// it extracts all text with white spaces,line breaks, hidden elements.
    const count= await product.count();
    
    // print all products text
       for(let i=0;i<count;i++){
        
        //const productName:string= await product.nth(i).innerText();
        //console.log(productName);

       // const productName:string | null= await product.nth(i).textContent();
       // console.log(productName);
       }  

    //2. allInnerText() vs allTextContent()
    //   it return the group of elements in the form of sstring array.    
      
    //const productNames:string[]= await product.allInnerTexts();
      //console.log(productNames);

    // const productNames:string[]= await product.allTextContents();
    // console.log(productNames);
     
    //3. all(): this returns an array of locators
    //   It converts Locator into Locator[].
     
    const productLocator:Locator[]= await product.all();
     console.log(productLocator);

     console.log(await productLocator[2].innerText());
     
     
});