const {test, expect } = require("@playwright/test");

test.skip('Table Data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    //total number of rows and column
    const columns = await table.locator('thead tr th');
    console.log('Number of column:',await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log('Number of rows:',await rows.count());
    expect(await rows.count()).toBe(5);

    //Select check box for a selected row 
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText:'Product 4'
    })

    await matchedRow.locator('input').check();

    //select multiple rows
    await selectProduct(page,rows, 'Product 1');
    await selectProduct(page,rows, 'Product 3');

    await page.waitForTimeout(5000);
})

test.skip('Print all table Data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    //print all product details
    for (let row = 0; row < await rows.count(); row++) {
        const rowNumber = await rows.nth(row);
        const rowTD = rowNumber.locator('td');
        for (let col = 0; col < await rowTD.count()-1; col++) {
            console.log("Data is : ",await rowTD.nth(col).textContent());
        }
    }
})

test('Print all table Data With pagination', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');

    //pagination count check
    const totalPages = await page.locator('.pagination li a');
    console.log('Number of pages in the page',await totalPages.count());

    for (let p = 0; p < await totalPages.count(); p++) {
        if (p>0) {
            await totalPages.nth(p).click();
        }
    //  print all product details
    for (let row = 0; row < await rows.count(); row++) {
        const rowNumber = await rows.nth(row);
        const rowTD = rowNumber.locator('td');
        for (let col = 0; col < await rowTD.count()-1; col++) {
            console.log("Data is : ",await rowTD.nth(col).textContent());
        }
    }   
    }

})

async function selectProduct( page, rows, prodName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: prodName
    })

    await matchedRow.locator('input').check();
}