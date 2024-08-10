// we can make paralle testing by defining it in confing.js
// file. Or we can define it on each file level also like this::


const { test, expect } = require("allure-playwright")

test.describe.configure({
    mode: "serial"
})

test('Playwright parallel mode 3.1', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.waitForTimeout(2000);
});

test('Playwright parallel mode 3.2', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.waitForTimeout(2000);
});