
import {test, expect, Locator} from "@playwright/test";


//Text Box/Input Box:

test('Input box actions', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox:Locator=page.locator("#name");

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    
    //return value of maxlength attribute of the element.
    const maxlength: string | null=await textbox.getAttribute("maxlength");
    console.log(maxlength);
    expect(maxlength).toBe('15');

    await textbox.fill("David jonh");

    //returns the input value of text box
    const enteredValue= await textbox.inputValue();
    console.log("Input value of firstName:",enteredValue);
    expect(enteredValue).toBe("David jonh");
    
    await page.waitForTimeout(3000);
    

});


//Radio Buttons:

test('Radio buttons action', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const male=page.locator("#male");
    const female= page.locator("#female");

    await expect(male).toBeVisible();
    await expect(male).toBeEnabled();
    expect(await male.isChecked()).toBe(false); //checks checkbox checked or not.

    await male.check(); //select radio button
    expect(await male.isChecked()).toBe(true);
    await expect(male).toBeChecked();  //preferable

    await page.waitForTimeout(3000);

    await expect(female).toBeVisible();
    await expect(female).toBeEnabled();
    await female.check();


    await page.waitForTimeout(3000);
});

//Check Box Actions:

test('CheckBox action', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //1.select specific checkbox and assert
    const sundayCheckBox:Locator=page.getByLabel('Sunday');
    //await sundayCheckBox.check();
    //await expect(sundayCheckBox).toBeChecked();

    //2. select all checkboxes and assert each is checked
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkBoxes:Locator[]=days.map(index => page.getByLabel(index));
    expect(checkBoxes.length).toBe(7);

    //3. Select all checkBoxes and assert each is checked.

      for(const checkbox of checkBoxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
      }

    //4. Uncheck last 3 checkboxes and assert.

       for(const checkbox of checkBoxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

       }

    await page.waitForTimeout(3000);
});