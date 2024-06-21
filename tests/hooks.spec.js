const {test, expect } = require("@playwright/test");

test('Upload Single File', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
})