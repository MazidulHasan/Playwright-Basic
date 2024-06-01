const { test , expect } = require("@playwright/test");

test('Built-In-locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    
    // getByAltText()->to locate and element, usually image, bu its text alternative
    // getByPlaceholder() -> to locate an input by placeholder
    // getByRole() -> to locate by explicit and implicit accessibility attributes
    // getByText() -> to locate by text content
    // getByLabel() -> to locate a form control by assocuated lable's text
    // getByTitle() -> to locate an element by its title attribute.
    //  getByTestId() -> to locate an element based on its data-testid attributes (other attributes can be)

    const logo = await page.getByAltText('company-branding'); 
    await expect(logo).toBeVisible();

   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('password').fill('admin123');

   await page.getByRole('button',{type:'submit'}).click();
    
   const userName = await page.locator("//span[@class='oxd-userdropdown-tab']").textContent(); 

   await expect(await page.getByText(userName)).toBeVisible();

   
})
