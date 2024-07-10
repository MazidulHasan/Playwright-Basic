const xlsx = require('xlsx');
const fs = require('fs');

function convertExcelToJson(excelFilePath, jsonFilePath) {
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);

    // fs.writeFileSync(jsonFilePath,JSON.stringify(jsonData,null, 2));
}

module.exports = convertExcelToJson;