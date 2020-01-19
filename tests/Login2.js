
const helper = require('../support/helper')
const login = require('../page_objects/login_page')
const dashboard = require('../page_objects/dashboard_page')
const config = require('../env').config
const _ = require('lodash')

// spec.js
describe('Login', function() {
  
  it('Login as Admin User', async function() {
    await browser.driver.manage().deleteAllCookies()
    await helper.openPage(browser.baseUrl)
    const userDetails = await _.find(config.users, function (user) {
      return user.name === 'Admin'
    })
    await login.setLogInEmail(userDetails.email)
    await login.setLogInPassword(userDetails.pwd)
    await login.clickSignInButton()
    await dashboard.generalMenuElementsExist()
    return dashboard.generalTopNavigaionBarExist()
  });

});