const {test, expect } = require("@playwright/test");

test('Advanced dropdown - Hidden dropdown', async ({ page }) => {
    // https://webdriveruniversity.com/
    // await page.goto('https://demoqa.com/select-menu');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]").click();
    await page.waitForTimeout(3000);
    const options = await page.$$("//div[@role='listbox']//span")
    for(let option of options){
        const jobTitle = await option.textContent();
        // console.log(jobTitle);
        if (jobTitle.includes('SQA Engineer')) {
            await option.click();
        }
    }
    
    await page.waitForTimeout(5000);
})