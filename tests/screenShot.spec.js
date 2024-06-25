const {test, expect } = require("@playwright/test");

test('Page screenshot',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'});
});

test('Full Page screenshot',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png', fullPage:true});
});

test('Element screenshot',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.locator("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")
            .screenshot({path:'tests/screenshots/'+Date.now()+'locator.png'});
});