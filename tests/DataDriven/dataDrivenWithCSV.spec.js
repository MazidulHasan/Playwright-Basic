import {test, expect} from "@playwright/test"
import fs from "fs"
import { parse } from "csv-parse/sync";

const loginData = parse(fs.readFileSync("tests/testData/loginData.csv"),{
    columns:true,
    skip_empty_lines:true,
})

loginData.forEach(data => {
    test(`Test with CSV Data ${data.id}`, async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.fill("//input[@id='firstName']", data.fname);
        await page.fill("//input[@id='lastName']", data.lname);
        await page.waitForTimeout(3000);
    })
    
});