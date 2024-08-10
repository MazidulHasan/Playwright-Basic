const { test, expect } = require("allure-playwright")

test('Playwright Chaining with selectors', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/30-day-free-trial');
    
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Tets001');
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    await page.waitForTimeout(5000);
});

test.only('Playwright Chaining with locators', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/30-day-free-trial');

    const form = page.locator('form#Form_getForm');
    const getTrial = page.getByRole('button',{name:'Get Your Free Trial'});

    await form.locator(getTrial).click();

    await page.waitForTimeout(5000);
});
