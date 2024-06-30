const {test, expect } = require("@playwright/test");

test('Playwright Rerporting 1', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
})

test('Playwright Reporting 2', async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/");
    await expect(page).toHaveTitle("Your Store"); 
})

test.skip('Playwright Reporting 3', async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/");
    await expect(page).toHaveTitle("Your Store3"); 
})

// list reporter
// npx playwright test --reporter=list

//line reporter
// npx playwright test --reporter=line

// dot reporter
// npx playwright test --reporter=dot

// html reporter
// npx playwright test --reporter=html

// json reporter
// PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json

// junit reporter
// PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit

// alluer report
// https://allurereport.org/docs/playwright/