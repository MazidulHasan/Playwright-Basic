const {test, expect } = require("@playwright/test");

test('SoftAssertions', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    // hard assertion
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();

    // soft assertion
    await expect.soft(page).toHaveTitle('STORE12');
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html12");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})
