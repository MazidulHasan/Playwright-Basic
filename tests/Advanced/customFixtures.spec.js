const {test, expect } = require("@playwright/test");

const myTest = test.extend({
    webApp: async({page},use)=>{
        console.log('inside webapp');
        await page.goto('https://www.demoblaze.com/');
        await page.locator('#login2').click();
        await page.locator('#loginusername').fill('pavanol');
        await page.locator('#loginpassword').fill('test@123');
        await page.locator("button[onclick='logIn()']").click();
        console.log('login Done');
        await use(page);
        console.log('teardown');
    }
})

myTest('Basic Test', async ({webApp }) => {
    console.log('Inside Basic test');
    await expect(webApp.locator("//a[normalize-space()='Samsung galaxy s6']")).toBeVisible();
    await webApp.locator("//a[normalize-space()='Samsung galaxy s6']").click();
});

myTest.skip('Basic Test2', async ({webApp }) => {
    console.log('Inside Basic test 2');
    await expect(webApp.locator("//a[@class='btn btn-success btn-lg']")).toBeVisible();
    await webApp.locator("//a[@class='btn btn-success btn-lg']").click();
});