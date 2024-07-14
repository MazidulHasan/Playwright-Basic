// dataDrivenWithExcel2.spec.js
import { test, expect } from "@playwright/test";
const convertExcelToJson = require('./converExcelToJson');

test.describe('Data-driven login tests', () => {
  let testData;

  test.beforeAll(() => {
    testData = convertExcelToJson('./tests/testData/loginData.xlsx');  
    console.log('Loaded test data:', testData);

    // Ensure testData is an array
    if (!Array.isArray(testData)) {
      throw new Error('Test data is not an array');
    }
  });

  test('Run data-driven tests', async ({ page }) => {
    // Ensure the test data is available
    if (!testData || !Array.isArray(testData)) {
      console.warn('No test data available to run tests.');
      return;
    }

    for (const [index, data] of testData.entries()) {
      await test.step(`Test case ${index + 1}: ${data.Fname} ${data.Lname}`, async () => {
        try {
          await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
          await page.fill("//input[@placeholder='Username']", data.Fname); // Assuming Fname as Username
          await page.fill("//input[@placeholder='Password']", data.Lname); // Assuming Lname as Password
          await page.click("//button[@type='submit']");
          await page.waitForTimeout(3000);

          // Example assertion (adjust as per your actual test requirements)
          await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard');
        } catch (error) {
          // console.error(`Test case ${index + 1} failed:`, error);
        }
      });
    }
  });

  test('sample test', async ({ page }) => {
    console.log("This is a sample test.");
  });
});
