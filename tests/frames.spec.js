const {test, expect } = require("@playwright/test");

test('Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = page.frames();
    console.log('Total Frames are:',allFrames.length);

    //Approach 1 (name/URL)
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']", 'Hello');
    

    //Approach 2 (Frame locator)
    const frame2WithLocator = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']");
    await frame2WithLocator.fill('Hello2');
    await page.waitForTimeout(5000);
})