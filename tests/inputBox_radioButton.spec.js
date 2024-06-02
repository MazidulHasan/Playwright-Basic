const {test, expect } = require("@playwright/test");

test('Handel inputbox', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    //  Inputbox - firstname
    const firstNameInput = await page.locator("//input[@id='FirstName']");
    await expect(firstNameInput).toBeVisible();
    await expect(firstNameInput).toBeEmpty();
    await expect(firstNameInput).toBeEditable();
    await expect(firstNameInput).toBeEnabled();
    await page.locator("//input[@id='FirstName']").fill('TestName');

    // pausing the execution for sometime
    await page.waitForTimeout(5000);
})

test('Handel Radio Buttons', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    const maleRadio = await page.locator("//input[@id='gender-male']");
    const femaleRadio = await page.locator("//input[@id='gender-female']");
    // await page.check("//input[@id='gender-male']");
    // or
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
    await expect(await maleRadio.isChecked()).toBeTruthy();
    await expect(await femaleRadio.isChecked()).toBeFalsy();
    
})

