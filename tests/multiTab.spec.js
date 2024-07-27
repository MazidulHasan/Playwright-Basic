const {test, expect } = require("@playwright/test");

test('Multitab check', async ({ page, context }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.click("input[name='mytext1']");

    // Open another new page (tab)
    const page2 = await context.newPage();
    await page2.goto('https://ui.vision/demo/webtest/frames/'); // Go to the second URL

    // Perform another action on the second page
    const text = await page2.textContent('/html[1]/frameset[1]/frame[1]'); // Copy text from the page

    // Close the second tab
    await page2.close();

    await page.fill("input[name='mytext1']",text);

    await page.waitForTimeout(5000);
})