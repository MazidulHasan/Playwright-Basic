exports.OrangeLoginPage  = class OrangeLoginPage{
    constructor(page){
        this.page = page;
        this.userName = "//input[@placeholder='Username']";
        this.password = "//input[@placeholder='Password']";
        this.loginButton = "//button[@type='submit']";
    }

    async gotoURL(){
        await this.page.gotoURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async loginAction(givenUserName,givenPassword){
        await page.fill(this.userName, givenUserName);
        await page.fill(this.password, givenPassword);
        await page.click(this.loginButton);
        await page.waitForNavigation();
    }

    async loginStatus(){
        const currentURL = this.page.url();
        return currentURL !== "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    }
}