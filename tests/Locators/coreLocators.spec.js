const { test, expect } = require("allure-playwright")

test('Basic Locator', async ({ page }) => {
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1. ID :: unique
    const firstName = page.locator('id=input-firstname');
    const lastName = page.locator('id=input-lastname');

    //2. class name
    const logoImage = page.locator('.img-responsive');

    //3. Text selector
    const header = page.locator('text=Register Account');

    //4. CSS selector
    const email = page.locator('css=input#input-email');
    const telephone = page.locator('css=input[name="telephone"]');
    // const checkbox = page.locator('css=input[type="checkbox"]');
    // or we can skip writing css explicitly
    const checkbox = page.locator('input[type="checkbox"]');

    // 5. Xpath
    const password = page.locator('xpath=//input[@id="input-password"]');
    // const search = page.locator('xpath=//input[@name="search" and @type="text"]');
    // or we can skip writing xpath explicitly
    const search = page.locator('//input[@name="search" and @type="text"]');

    await firstName.fill('Fname Test');
    await lastName.fill('Fname Test');
    const logoExist = await logoImage.isEnabled();
    expect(logoExist).toBeTruthy();
    const headerExist = await header.isEnabled();
    expect(headerExist).toBeTruthy();
    await email.fill('Test email');
    await telephone.fill('91283');
    await checkbox.click();
    await password.fill('test');
    await search.fill('New test search');

    await page.waitForTimeout(5000);
});
