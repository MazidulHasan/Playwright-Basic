const { test, expect } = require('@playwright/test');
const convertExcelToJson = require('./');  // Corrected path

const testData = convertExcelToJson('./tests/testData/loginData.xlsx');  // Corrected path

test.describe('Data-driven tests with Excel', () => {
  for (const data of testData) {
    test(`Real Test Data ${data.id}`, async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.fill("//input[@placeholder='Username']", data.Username);
      await page.fill("//input[@placeholder='Password']", data.Password);
      await page.click("//button[@type='submit']");
      await page.waitForTimeout(3000);

      // Example assertion (adjust as per your actual test requirements)
      await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard');
    });
  }
});
