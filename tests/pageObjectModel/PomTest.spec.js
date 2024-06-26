const {test, expect } = require("@playwright/test");
import { CartPage } from "./pages/Cartpage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

test('test',async ({page})=>{
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const cart = new CartPage(page);

    const productName = "Nokia lumia 1520";
    //login
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //Add Product to cart
    await homePage.addProductToCart(productName);
    await page.waitForTimeout(3000);
    await homePage.gotoCart();

    //check cart page
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart(productName);
    expect(await status).toBe(true);

    await page.waitForTimeout(3000);
});
