const {test, expect } = require("@playwright/test");

test('AssetionTest', async ({ page }) => {
    // open app URL
    await page.goto('https://demo.nopcommerce.com/register');

    // 1. Page has URL or not
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2.Page has title or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3. Element is visible or not
    const pageLogo = await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(pageLogo).toBeVisible();

    // 4. Control isebable or not
    const searchStoreBox = await page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();
    // await expect(searchStoreBox).toBeDisabled(); //Element is disabled if it has "disabled" attribute or is disabled via 'aria-disabled'. 

    // 5.Radio / Checkbox is checked or not
    const maleRadioButton = await page.locator('#gender-male');
    maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsletterCheckbox = await page.locator("//label[normalize-space()='Newsletter:']");
    await expect(newsletterCheckbox).toBeChecked();

    // 6.Element has attribute or not
    const regButton = await page.locator("//button[@id='register-button']");
    await expect(regButton).toHaveAttribute('type','submit');

    // 7.Element matches text -> Exact match
    await expect(await page.locator("//h1[normalize-space()='Register']")).toHaveText('Register');

    // 8. Element contains text or not -> partial match
    await expect(await page.locator("//h1[normalize-space()='Register']")).toContainText('Reg');

    // 9. Input has a value which is correct or not
    const emailInput = await page.locator("//input[@id='Email']");
    emailInput.fill('testDemo');
    await expect(emailInput).toHaveValue('testDemo');

    // 10.List of elements has given length
    const allMonthDropdown = await page.locator("select[name='DateOfBirthMonth'] option");
    await expect(allMonthDropdown).toHaveCount(13);

})
