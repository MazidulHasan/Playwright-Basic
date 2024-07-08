exports.DashBoardPage  = class DashBoardPage{
    constructor(page){
        this.page = page;
        this.dashBoardText = "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']";
        // this.password = "//input[@placeholder='Password']";
        // this.loginButton = "//button[@type='submit']";
    }

    async checkDashBoard(){
        await this.page.waitForSelector(this.dashBoardText);
        const isDashboardVisible = await this.page.isVisible(this.dashBoardText);
        return isDashboardVisible;
    }

    // async gotoURL(){
    //     await this.page.gotoURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // }

    // async loginAction(givenUserName,givenPassword){
    //     await page.fill(this.userName, givenUserName);
    //     await page.fill(this.password, givenPassword);
    //     await page.click(this.loginButton);
    //     await page.waitForNavigation();
    // }

    // async loginStatus(){
    //     const currentURL = this.page.url();
    //     return currentURL !== "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    // }
}