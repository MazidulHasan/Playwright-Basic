const { test, expect } = require("allure-playwright")

test.skip('data-testid', async ({ page }) => {
    // if we use data-testid="x" in the web page then playwright can pickup that locator
    // by itself with this command 
    // page.getByAltText('x')

    // We can make it also a custom selector of our own through the full system
    // if we want we can make a custom attribut of it like this
    // https://playwright.dev/docs/locators#locate-by-test-id:~:text=By%20default%2C%20page.getByTestId()%20will%20locate%20elements%20based%20on%20the%20data%2Dtestid%20attribute%2C%20but%20you%20can%20configure%20it%20in%20your%20test%20config%20or%20by%20calling%20selectors.setTestIdAttribute().
});

test('Playwright Own Locators', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    await expect(page.getByRole('heading',{name: 'Register Account'})).toBeVisible();
    await expect(page.getByRole('link',{name: 'Forgotten Password'})).toBeVisible();
    await expect(page.getByRole('radio',{name: 'Yes'})).toBeVisible();

    await page.waitForTimeout(5000);
})
