const {test, expect } = require("./requiredFixtures");
const DashBoardPage = require('./pages/dashBoard').DashBoardPage;

test.beforeEach(async ({ loggedInPage  }) => {
    await loggedInPage('Admin', 'admin123');
});

test('Basic test', async ({ page }) => {
    // const dashboard = new DashBoardPage(page);
    // const isOnDashboard = await dashboard.checkDashBoard();
    // expect(isOnDashboard).toBe(true);
})
