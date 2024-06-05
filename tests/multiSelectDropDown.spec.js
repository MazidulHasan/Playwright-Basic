const {test, expect } = require("@playwright/test");

test('Multi Select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    const dropdown = await page.locator('#colors');
    const selectedOptions = await dropdown.evaluate((dropdown) => {
        const options = Array.from(dropdown.querySelectorAll('option'));
        return options.filter(option => option.selected).map(option => option.textContent);
        // OR: return options.filter(option => option.selected).map(option => option.value);
      });
      
      console.log('Selected options:', selectedOptions);
    
    // Assertions
    // 1. check number of options in dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);

    // 2.check numbner of options in dropdown using JS arrays
    const arrayOptions = await page.$$('#colors option');
    await expect(arrayOptions.length).toBe(5);

    // 3.check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Black')).toBeFalsy;
})
