const LoginTestCase = require('./../testcase/login.testcase')
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const browser = require('browser')
describe('My Login application', () => {// Test suite
    it('should not login with valid credentials', async () => { // Test Case success
        await LoginPage.open();
        await LoginPage.login(LoginTestCase.TC1.username , LoginTestCase.TC1.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Incorrect username or password.');
    });

    it('should login with valid credentials', async () => { // Test Case
        await LoginPage.open();
        await LoginPage.login(LoginTestCase.TC2.username, LoginTestCase.TC2.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        const homepageUrl = await browser.getUrl();
        await expect(homepageUrl).toHaveTextContaining('https://github.com/')
    });
});


