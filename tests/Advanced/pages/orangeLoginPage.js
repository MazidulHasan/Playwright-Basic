exports.OrangeLoginPage  = class OrangeLoginPage{
    constructor(page){
        this.page = page;
        this.userName = "//input[@placeholder='Username']";
        this.password = "//input[@placeholder='Password']";
        this.loginButton = "//button[@type='submit']";
    }

    async gotoURL(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async loginAction(givenUserName,givenPassword){
        await this.page.fill(this.userName, givenUserName);
        await this.page.fill(this.password, givenPassword);
        await this.page.click(this.loginButton);
    }

    async loginStatus(){
        const currentURL = this.page.url();
        await console.log('logged In check');
        return currentURL !== "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    }
}