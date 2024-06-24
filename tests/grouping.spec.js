const {test, expect } = require("@playwright/test");

test.beforeAll(async ({ browser }) => {
    console.log('Before All');
})
test.beforeEach(async () => {
    console.log('Before Each');
})



test.describe('First Group', () => {
    test('First', async () => {
        console.log('This is test 1');
    })
    
    test('Two', async () => {
        console.log('This is test 2');
    })
})

test.describe.only('Second Group', () => { //also we can use skip
    test('Three', async () => {
        console.log('This is test 3');
    })
    
})

test.describe('Third Group', () => {
    test('Four', async () => {
        console.log('This is test 4');
    })
    
})




test.afterAll(async () => {
    console.log('After All');
})
test.afterEach(async () => {
    console.log('After each');
})
