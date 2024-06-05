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
    
    // 2. Check presence of vlaue in the dropdown
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();
    // or
    //  Presence of value in the dropdown - using looping
    const options = await page.$$('#country option')
    let status = false;
    for(const option of options){
        let value = await option.textContent();
        if (value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();


    // 3.select option from dropdown using loop
    const options2 = await page.$$('#country option')
    for(const option of options2){
        let value = await option.textContent();
        if (value.includes('France')) {
            await page.selectOption("#country", value)
            break;
        }
    }
    const newContent = await page.locator('#country').textContent();
    await expect(content.includes('France')).toBeTruthy();


    await page.waitForTimeout(5000);

})
