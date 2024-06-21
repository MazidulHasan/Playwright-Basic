const {test, expect } = require("@playwright/test");

test('Drag and drop', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const rome = await page.locator("#box6");
    const italy = await page.locator("#box106");

    //Approach 1
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();

    // Aoorpach 2
    const seoul = await page.locator("#box5");
    const southKorea = await page.locator("#box105");

    await seoul.dragTo(southKorea); 

    await page.waitForTimeout(5000);
})