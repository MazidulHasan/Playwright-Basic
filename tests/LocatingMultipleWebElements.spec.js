const { test,expect } = require("@playwright/test");

test('LocateMultipleElemets', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    // await page.waitForSelector('');
     const links = await page.$$('a');

     for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText.trim());
     }
})

