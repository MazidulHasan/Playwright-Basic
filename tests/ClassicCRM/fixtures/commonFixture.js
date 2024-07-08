const { test,expect } = require("allure-playwright");
const { LoginPage } = require("../pages/loginPage");

exports.test = test.extend({
    loginPage : async({page}, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    loginAction: async({loginPage} , use)=>{
        const performLoginAction = async (userName, password)=>{
            await loginPage.gotoLoginPage();
            await loginPage.loginAction(userName,password);
        }
        await use(performLoginAction);
    }
})