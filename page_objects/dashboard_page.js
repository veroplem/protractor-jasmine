const { element, by } = require('protractor')
const helper = require('../support/helper')

const dashboardPage = function () {
  this.elements = {
    dashboardMenu: element(by.xpath('//span[@class="site-menu-title ng-binding" and contains(text(),\'Dashboard\')]')),
    jobsMenu: element(by.xpath('//span[@class="site-menu-title ng-binding" and contains(text(),\'Jobs\')]')),
    topNavigaionBar: element(by.id('top-navigation-bar')),
    toggleMenubar: element(by.id('toggleMenubar')) 
  }

  this.generalMenuElementsExist = async () => {
    //Disable waiting for Angular to finish rendering the Dashboard page and complete all http requests as it has an intercom request which stays open
    await browser.waitForAngularEnabled(false)
    await helper.waitForElementToBePresented(this.elements.dashboardMenu)
    await helper.waitForElementToBePresented(this.elements.jobsMenu)
    await helper.waitForElementToBeVisible(this.elements.dashboardMenu)
    await helper.waitForElementToBeVisible(this.elements.jobsMenu)
    return browser.waitForAngularEnabled(true)
  }
  this.generalTopNavigaionBarExist = async () => {
    await browser.waitForAngularEnabled(false)
    await helper.waitForElementToBePresented(this.elements.topNavigaionBar)
    await helper.waitForElementToBeVisible(this.elements.topNavigaionBar)
    await helper.waitForElementToBePresented(this.elements.toggleMenubar)
    await helper.waitForElementToBeVisible(this.elements.toggleMenubar)
    return browser.waitForAngularEnabled(true)
  }
}

module.exports = new dashboardPage() // eslint-disable-line
