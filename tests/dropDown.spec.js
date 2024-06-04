const {test, expect } = require("@playwright/test");

test('Handel Dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Multiple ways to select option from drop down
    await page.locator("#country").selectOption({label:'India'}); //label
    // or
    await page.locator("#country").selectOption('Canada'); //visible text
    // or
    await page.locator("#country").selectOption({value:'uk'}); //value
    // or
    await page.locator("#country").selectOption({index:1}); //index
    // or
    await page.selectOption("#country",'India');


    // Assertions
    // 1. Check total number of options in dropdown
    const countryOptions = await page.locator('#country option'); // this will return all the options inside country
    await expect(countryOptions).toHaveCount(10);
    // or with array
    const countryOptionsArray = await page.$$('#country option');
    console.log("Number of Options",countryOptionsArray.length);
    await expect(countryOptionsArray.length).toBe(10);


    await page.waitForTimeout(5000);

})
