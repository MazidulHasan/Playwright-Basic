const {test, expect } = require("@playwright/test");

test('Page screenshot',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.click('id=login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    const logoutLink = await page.locator('//*[@id="nameofuser"]');
    await expect(logoutLink).toBeVisible();
    await page.close();
});
