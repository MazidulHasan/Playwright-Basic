const {test, expect } = require("allure-playwright");

test('Check GetBy role', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await expect(page.getByRole("heading",{name:'Register Account'})).toBeVisible();
    const checkboxYes =  await page.getByRole("radio",{name:'Yes'}).isChecked();
    await expect(checkboxYes).toBeFalsy();
});