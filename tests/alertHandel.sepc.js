const {test, expect } = require("@playwright/test");

test('alert Handel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //enabling alert handeling  -- dialog window handeler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });


    //before clicking we need to enable the dialog window handeler
    await page.click('//button[normalize-space()="Alert"');
    page.waitforTimeout(5000);
})