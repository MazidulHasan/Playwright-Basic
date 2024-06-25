const {test, expect } = require("@playwright/test");

//only
// test.only('tet1',async ({page})=>{
//     console.log('Test 1');
// });

//skip
// test.skip('tet2',async ({page})=>{
//     console.log('Test 2');
// });

//skip based on condition
// test('tet3',async ({page, browserName})=>{
//     console.log('Test 3');
//     if (browserName = 'chromium') {
//         test.skip();
//     }
// });

//Fixme --> has open issue need to fix it before running in prod
test.fixme('tet4',async ({page})=>{
    console.log('Test 4');
});

// Fix me based on condition
test('tet4.1',async ({page})=>{
    console.log('Test 4.1');
    test.fixme();
    console.log('Test 4.1.1');
});

test.fail('tet5',async ({page})=>{ //negative test
    console.log('Test 5');
    expect(1).toBe(2);
});

// or

test('tet5.1',async ({page})=>{ // if fail then the test will pass
    console.log('Test 5.1');
    test.fail();
    console.log('Test 5.1.1');
    expect(1).toBe(2);
});

test('tet6',async ({page})=>{
    test.slow(); 
    console.log('Test 6');
    await page.goto('https://www.demoblaze.com/');
});