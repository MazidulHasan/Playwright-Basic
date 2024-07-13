import {test, expect} from "@playwright/test"
// const convertExcelToJson = require('./converExcelToJson');

test.describe(() => {
  let testData;
  
test.beforeAll(() => {
  // testData = convertExcelToJson('./tests/testData/loginData.xlsx');  
  console.log('asdfkj s');
})



  // testData.forEach((data, index) => {
  //   test(`Test case ${index + 1}: ${data.Username}`, async ({ page }) => {
  //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //     await page.fill("//input[@placeholder='Username']", data.Username);
  //     await page.fill("//input[@placeholder='Password']", data.Password);
  //     await page.click("//button[@type='submit']");
  //     await page.waitForTimeout(3000);

  //     // Example assertion (adjust as per your actual test requirements)
  //     await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard');
  //   });
  // });

  test('test', async ({ page }) => {
    console.log("sakdjgf");
  })
  
});
