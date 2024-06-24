const {test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({browser})=>{

})

test.afterAll(async ()=>{
    
})

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();
})
test('Home Page Test', async () => {
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    //Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
})

test('Home Page Test 2', async () => {
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    //Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
})

test.afterEach(async()=>{
    await page.locator('#logout2').click();
})