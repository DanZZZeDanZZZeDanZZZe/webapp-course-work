// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.logOutAtApplication = (driver) => {
  Given('I go to the calendar page by path {string}', async function (path) {
    await driver.openPage(path)
  })

  When('click to header button with xpath {string}', async function (string) {
    await driver.clickElementByXpath(string)
  })

  Then('I get to the authorization page by path {string}', async function (
    url
  ) {
    await sleep(4000)
    await driver.checkPageUrl(url)
  })

  return driver
}
