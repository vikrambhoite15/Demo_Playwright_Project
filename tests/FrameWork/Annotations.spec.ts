import test from "@playwright/test";

/*1.test.skip():

  test.skip('Verify letskodit page', async({page})=>{
  await page.goto("https://www.letskodeit.com/practice");
  console.log(await page.title());   
})

//2.test.only():
     test.only ('Verify amazon page',async({page})=>{
    await page.goto("https://www.amazon.in/");
    console.log(await page.url());
     })

//3. test.fail(): Marks a test as a expected to fail.
    test.fail('Verify letskodit page', async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
     console.log(await page.title());
    });

//4.test.fixme(): Marks test as a broken and skips execution. It will be skipped.
     test.fixme('Verify testautomation page', async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     console.log(await page.title());   
     });  
     
//5.test.slow(): Triples the test timeout.
// test('Verify amazon page',async({page})=>{
    await test.slow();
    await page.goto("https://www.amazon.in/");
    
    console.log(await page.url());
    });       */


test('Verify testautomation page', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(await page.title());   

});

test('Verify letskodit page', async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    console.log(await page.title());
    
});

test('Verify amazon page',async({page})=>{
    await page.goto("https://www.amazon.in/");
    
    console.log(page.url());
    
});