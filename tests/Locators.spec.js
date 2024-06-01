// const {test, expect } = require("@playwright/test");
//  or
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    
    //we can perform click action in two ways
    // 1. page.locator(..).click()
    // 2. page.click('locator')

    // await page.locator('id=login2').click();
    await page.click('id=login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    const logoutLink = await page.locator('//*[@id="nameofuser"]');
    await expect(logoutLink).toBeVisible();

    // for multiple page elements we need to use $$ > page.$$(locator)
    await page.close();
    
})

