import {test} from "../testData/testDataFixture"

test.beforeEach(async ({ page,loginData }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill("//input[@placeholder='Username']", loginData.UserName);
    await page.fill("//input[@placeholder='Password']", loginData.Password);
    await page.click("//button[@type='submit']");
    await page.waitForTimeout(3000);
})


test(`login Test with Fixture Data`, async ({ page, testData}) => {
    await page.click("//span[normalize-space()='Recruitment']");
    await page.click("//button[normalize-space()='Add']");
    await page.fill("//input[@placeholder='First Name']", testData.fname);
    await page.fill("//input[@placeholder='Last Name']", testData.lname); 
    await page.waitForTimeout(3000);
})