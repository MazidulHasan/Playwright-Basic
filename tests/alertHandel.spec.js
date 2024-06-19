const {test, expect } = require("@playwright/test");

test.skip('alert Handel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //enabling alert handeling  -- dialog window handeler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });


    //before clicking we need to enable the dialog window handeler
    await page.click('//button[@onclick="myFunctionAlert()"]');
})

test.skip('Confirmation alert Handel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //enabling alert handeling  -- dialog window handeler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    });


    //before clicking we need to enable the dialog window handeler
    await page.click('//button[@onclick="myFunctionConfirm()"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
})

test('Prompt alert Handel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //enabling alert handeling  -- dialog window handeler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('New Data');
    });


    //before clicking we need to enable the dialog window handeler
    await page.click('//button[@onclick="myFunctionPrompt()"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello New Data! How are you today?');

    await page.waitForTimeout(5000);
})