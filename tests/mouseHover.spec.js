const {test, expect } = require("@playwright/test");

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://www.techlistic.com/2020/07/automation-testing-demo-websites.html');
    
    const tech = await page.locator("(//a[@class='dropbtn'][normalize-space()='Tech'])[1]");
    
    //perform mouse hove
    await tech.hover()

    await page.waitForTimeout(5000);
})