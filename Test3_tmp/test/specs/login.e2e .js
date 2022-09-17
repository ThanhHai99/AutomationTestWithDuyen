const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
// const LoginTestCase = require('./../../testcase/login.testcase.const')
const { TC1username, TC1password, TC2username, TC2password } = require('./../../testcase/login.testcase.excel')

describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open();
        console.log(LoginTestCase.TC2.usename)
        await LoginPage.login(TC2username, TC2password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Incorrect username or password.');
    });
    
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(TC1username, TC1password);
        await expect(SecurePage.flashAlert).toBeExisting();
        const homepageUrl = await browser.getUrl();
        await expect(homepageUrl).toEqual('https://github.com/')
    });
    
});


