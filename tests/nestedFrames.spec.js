const {test, expect } = require("@playwright/test");

test('Nested Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // We need to use frame object to locate nested frames
    const frame3 = await page.frame(({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}));
    frame3.locator("input[name=mytext3]").fill('Hello3');

    //nested frame
    const choldFrames = await frame3.childFrames();
    await choldFrames[0].locator("#i5 > div:nth-child(3) > div:nth-child(1)").check();

    await page.waitForTimeout(5000);
})