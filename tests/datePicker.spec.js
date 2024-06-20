const {test, expect } = require("@playwright/test");

test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill("#datepicker",'06/13/2024');

    //using proper date picker
    const year = '2021';
    const month = 'May';
    const date = '13';

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    page.click('#datepicker');
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if (currentYear==year && currentMonth==month) {
            break;
        }
        const currentMonthIndex = monthNames.indexOf(currentMonth);
        const targetMonthIndex = monthNames.indexOf(month);
        if (parseInt(currentYear) < parseInt(year) || 
            (parseInt(currentYear) === parseInt(year) && currentMonthIndex < targetMonthIndex)) {
            await page.locator('[title="Next"]').click(); // Going to Next month
        } else {
            await page.locator('[title="Prev"]').click(); // Going to Previous month
        }
    }

    // const allDate = await page.$$("//a[@class='ui-state-default']")
    // //date selection using loop
    // for(const dt of allDate){
    //     if (await dt.textContent() == date) {
    //         await dt.click();
    //         break;
    //     }
    // }


    //date selection witout loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);

})