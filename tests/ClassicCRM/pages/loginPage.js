exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.loginUrl = "https://classic.crmpro.com/index.html";
        this.userName = "//input[@placeholder='Username']";
        this.password = "//input[@placeholder='Password']";
        this.loginButton = "//input[@value='Login']";
    }

    async gotoLoginPage(){
        await this.page.goto(this.loginUrl);
        await this.page.waitForLoadState('load');
    }

    async loginAction(rUserName,rUserPass){
        await this.page.fill(this.userName,rUserName);
        await this.page.fill(this.password,rUserPass);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState('load');
    }
}