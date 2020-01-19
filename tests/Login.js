
const helper = require('../support/helper')
const login = require('../page_objects/login_page')
const dashboard = require('../page_objects/dashboard_page')
const config = require('../env').config
const _ = require('lodash')

// spec.js
describe('Login as Registered User', function() {
  
  it('I navigate to Tradify Login Page', async function() {
    await browser.driver.manage().deleteAllCookies()
    return helper.openPage(browser.baseUrl)
  });

  it('I enter username and password for Admin', async function() {
    const userDetails = await _.find(config.users, function (user) {
      return user.name === 'Admin'
    })
    await login.setLogInEmail(userDetails.email)
    return login.setLogInPassword(userDetails.pwd)
  });

  it('I click the Sign In button', async function() {
    return login.clickSignInButton()
  });

  it('I should be on my dashboard', async function() {
    await dashboard.generalMenuElementsExist()
    return dashboard.generalTopNavigaionBarExist()
  });
});