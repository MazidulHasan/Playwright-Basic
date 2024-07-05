const {test, expect } = require("./requiredFixtures");

test.beforeEach(async ({ loginDemo }) => {
    await loginDemo.gotoURL();
});

test('Basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-fixtures')
})
