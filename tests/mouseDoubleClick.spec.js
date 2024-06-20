const {test, expect } = require("@playwright/test");

test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

    //double click
    await btnCopy.dblclick();

    const field = await page.locator("//input[@id='field2']");
    await expect (field).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
})