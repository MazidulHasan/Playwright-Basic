const {test, expect } = require("@playwright/test");

test('Drag and drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const name = await page.locator("#name").fill('Name of the data');
    // ctrl + A
    await page.keyboard.press('Control+A');
    // ctrl + c
    await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    // ctrl + v
    await page.keyboard.press('Control+V');
    
    await page.waitForTimeout(5000);
})