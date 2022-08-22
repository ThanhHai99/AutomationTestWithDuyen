const LoginTestCase = require('./../../testcase/login.testcase.const')
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => { // Test Suite
    it('should not login with valid credentials', async () => { // Test Case success
        await LoginPage.open();
        await LoginPage.login(LoginTestCase.TC1.username , LoginTestCase.TC1.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your username is invalid!');
    });

    it('should login with valid credentials', async () => { // Test Case
        await LoginPage.open();
        await LoginPage.login(LoginTestCase.TC2.username, LoginTestCase.TC2.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});


