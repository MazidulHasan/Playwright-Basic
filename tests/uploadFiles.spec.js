const {test, expect } = require("@playwright/test");

test('Upload Single File', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.waitForSelector("//input[@id='input-4']");
    await page.locator("//input[@id='input-4']").setInputFiles('tests/uploadFiles/G_sound.docx');

    await page.waitForTimeout(5000);
     
})

test.only('Upload Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForSelector("//input[@id='filesToUpload']");
    await page.locator("//input[@id='filesToUpload']")
        .setInputFiles(['tests/uploadFiles/G_sound.docx',
                        'tests/uploadFiles/G_sound2.docx']);
    
    await page.waitForTimeout(5000);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('G_sound.docx');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('G_sound2.docx');
})

