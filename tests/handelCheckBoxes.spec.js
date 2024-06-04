const {test, expect } = require("@playwright/test");

test('handel Check Box', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
    const firstData = await page.locator("//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@class='orangehrm-container']/div[@role='table']/div[@role='rowgroup']/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/i[1]");
    await firstData.check();

    expect(await firstData).toBeChecked();
    expect(await firstData.isChecked()).toBeTruthy();

    // Multiple Checkboxes
    const checkboxLocators = [
        "//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@class='orangehrm-container']/div[@role='table']/div[@role='rowgroup']/div[2]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/i[1]",
        "//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@class='orangehrm-container']/div[@role='table']/div[@role='rowgroup']/div[3]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/i[1]",
        "//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@class='orangehrm-container']/div[@role='table']/div[@role='rowgroup']/div[4]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/i[1]",
        "//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@class='orangehrm-container']/div[@role='table']/div[@role='rowgroup']/div[5]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/i[1]"
    ];
    
    
    for (const locator of checkboxLocators) {
        await page.locator(locator).check();
        
    }

    await page.waitForTimeout(5000);
    
    // unselecting
    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();    
        }
        
        
    }

    await page.waitForTimeout(5000);


})
