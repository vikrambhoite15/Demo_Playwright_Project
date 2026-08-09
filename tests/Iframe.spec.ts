import {test,expect, Frame} from "@playwright/test";

test('frame demo', async ({page})=>{
    
    await page.goto("https://ui.vision/demo/webtest/frames/");

//Total number of frames present on the page.

    const frames= page.frames();
    console.log("Number of frames", frames.length);

//using frame locator

   const frame1= page.frameLocator("frame[src='frame_1.html']");
   await frame1.locator("input[name='mytext1']").fill("abcdef");

   await page.waitForTimeout(3000);

   //using frame with URL:
   
   /* -page.frame() allow only url & name atribute. 
      -if we use frame() method to locate frame, then need to use if-else statement.
       because frame() return null type.   */

   const frame2=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'});
   
   if(frame2){
    
    await frame2.locator("input[name='mytext2']").fill("Vijaykumar");
   }
   
   await page.waitForTimeout(3000);

//using frame locator
    
    const frame4=page.frameLocator("frame[src='frame_4.html']");
    await frame4.locator("input[name='mytext4']").fill("Hello");

    await page.waitForTimeout(3000);
});

test('Inner frame demo',async ({page})=>{

     await page.goto("https://ui.vision/demo/webtest/frames/");

     const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
     
     if(frame3){
        await frame3.locator("input[name='mytext3']").fill("Welcome");
        
        //child frame:
        const childFrames:Frame[]=frame3.childFrames();
        console.log("ChildFrames inside frame 3:",childFrames.length); //only 1 child frame exist

        const checkBox= childFrames[0].locator("#i27");
        await checkBox.check();
        await expect(checkBox).toBeChecked();     
     }
     
     await page.waitForTimeout(3000);
})