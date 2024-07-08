const { test } = require('@playwright/test');
const OrangeLoginPage = require('./pages/orangeLoginPage').OrangeLoginPage;

exports.test = test.extend({
  loginDemo: async ({ page }, use) => {
    const loginPage = new OrangeLoginPage(page);
    await use(loginPage);
  },
  loggedInPage: async ({ loginDemo }, use) => {
    // Function to handle login and check status
    const performLogin = async (username, password) => {
      await loginDemo.gotoURL();
      await loginDemo.loginAction(username, password);
      const isLoggedIn = await loginDemo.loginStatus();
      if (!isLoggedIn) {
        throw new Error('Login failed');
      }
    };
    await use(performLogin);
  },
});

exports.expect = test.expect;
