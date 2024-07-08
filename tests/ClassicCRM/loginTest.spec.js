const {test, expect} = require("./fixtures/commonFixture")

test.beforeEach(async ({ loginAction }) => {
    await loginAction('apiautomation','Selenium@12345');
});

test('Dashboard Page Test', async ({ }) => {
    
})

