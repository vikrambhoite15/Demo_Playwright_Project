import {test,expect} from "@playwright/test";

//Data Driven using Array of Object

const loginData=[
{
    username: 'standard_user',
    password: 'secret_sauce',
    expect: 'success',
    tag: '@positive',
    check: 'Valid username & valid password'

},
{
    username: 'standard_user',
    password: 'secret',
    expect: 'fail',
    tag: '@negative',
    check: 'Valid username & invalid password'
},
{
    username: 'standard',
    password: 'secret_sauce',
    expect: 'fail',
    tag: '@negative',
    check: 'inValid username &  valid password'
},
{
    username: 'standard23',
    password: 'sauce',
    expect: 'fail',
    tag: '@negative',
    check: 'inValid username & invalid password'
}
];

for(const data of loginData){

test(`Login test with ${data.check}`, async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(data.username);
    await page.locator("#password").fill(data.password);
    await page.locator("#login-button").click();

    if(data.expect=='success'){
        const name= page.locator("span[class='title']");
        await expect(name).toBeVisible();
    }
    else{
        const error=page.locator("//h3[@data-test='error']");
        await expect(error).toBeVisible();
    };

    
});

}
