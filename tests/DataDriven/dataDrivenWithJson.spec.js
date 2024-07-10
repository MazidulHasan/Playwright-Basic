import {test, expect} from "@playwright/test"
import loginData from "../testData/loginData.json"

loginData.forEach(data => {
    test(`login Test with Json Data ${data.UserName}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.fill("//input[@placeholder='Username']", data.UserName);
        await page.fill("//input[@placeholder='Password']", data.Password);
        await page.waitForTimeout(3000);
    })
    
});