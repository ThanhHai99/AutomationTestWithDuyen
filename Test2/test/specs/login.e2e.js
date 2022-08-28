const LoginTestCase = require('./../../testcase/login.testcase.const')
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => { // Test Suite
    it('should not login with valid credentials', async () => { // Test Case success
        await LoginPage.open();
        await LoginPage.login(LoginTestCase.TC1.username , LoginTestCase.TC1.password);
        await expect(SecurePage.alert).toBeExisting();
        await expect(SecurePage.alert).toHaveTextContaining('Thông tin đăng nhập của bạn không chính xác!');
    });

    // it('should login with valid credentials', async () => { // Test Case
    //     await LoginPage.open();
    //     await LoginPage.login(LoginTestCase.TC2.username, LoginTestCase.TC2.password);
    //     await expect(SecurePage.alert).toBeExisting();
    //     await expect(SecurePage.alert).toHaveTextContaining('You logged into a secure area!');
    // });
});


