
import {test} from "@playwright/test";

test.beforeEach('beforeach', async ()=>{
    console.log("Before Each");
    
});

test.afterEach('AfterEach', async ({page},testInfo)=>{
    console.log("After Each");
    console.log(testInfo.title);
    console.log(testInfo.status);
    console.log(testInfo.duration);
    
});
test('Test1', async ({page})=>{
    console.log("Test-1");
    
});

test ('Test2', async ({page})=>{
    console.log("Test-2");
    
});

test('Test3', async ({page})=>{
    console.log("Test-3");
    
    });


test.beforeAll('Before All', async ()=>{
    console.log("Before All");
    
});
test.afterAll('After All', async ()=>{
    console.log("After All");   
    
});