const {test, expect } = require("@playwright/test");

test('tet1@sanity',async ({page})=>{  //here @sanity is the tag name
    console.log('Test 1');
});

test('tet2@reg',async ({page})=>{
    console.log('Test 2');
});

test('tet3@reg',async ({page})=>{
    console.log('Test 3');
});

test('tet4@sanity',async ({page})=>{
    console.log('Test 4');
});

test('tet5@sanity',async ({page})=>{
    console.log('Test 5');
});

test('tet6@sanity@reg',async ({page})=>{ //can add multiple tags
    console.log('Test 5');
});


//To run only sanit we need to run like this:
//npx playwright test tests/tags.spec.js --project chromium --grep "@sanity"

// for both
// npx playwright test tests/tags.spec.js --project chromium --grep --% "@sanity^|@reg"

//Want to run only sanity but not reg
// npx playwright test tests/tags.spec.js --project chromium --grep --% "@sanity" --grep-invert "@reg"