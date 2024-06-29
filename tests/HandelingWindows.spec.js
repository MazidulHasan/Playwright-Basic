const {test, expect, chromium } = require("@playwright/test");

test('Handel Pages/Windows', async () => {
    const browsr = await chromium.launch();
    const context = await browsr.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("No of pages create:", allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://naveenautomationlabs.com/opencart/");
    await expect(page2).toHaveTitle("Your Store"); 
})

test('Handel Multiple Pages', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    const allPages = context.pages();
    console.log("No of pages create:", allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM");
})
