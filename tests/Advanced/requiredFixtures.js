const base = require('@playwright/test');
const { orangeLoginPage, OrangeLoginPage } = require('./pages/orangeLoginPage')

exports.test = base.test.extend({
    loginDemo: async({page},use) =>{
        const loginPage = new OrangeLoginPage(page);
        await loginPage.gotoURL();
        await loginPage.loginAction('Admin','admin123');
        if (await loginPage.loginStatus) {
            console.log('Success login');
        }
        // Use the fixture value in the test.
        await use(loginDemo);

        // Clean up the fixture.
        await loginDemo.removeAll();
    }
})
exports.expect = base.expect;