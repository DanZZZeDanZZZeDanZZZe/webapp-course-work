// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.returnToCalendar = (driver) => {
  Given('I open the form for adding a new record', async function () {
    const day = (() => new Date())().getDate()
    await driver.clickElementByXpath(`//main//p[text() = '${day}']/../button`)
    await sleep(2000)
  })

  When('click to header link button with xpath {string}', async function (
    string
  ) {
    await driver.clickElementByXpath(string)
  })

  Then('I return to the calendar by path {string}', async function (string) {
    await driver.checkPageUrl(string)
  })

  return driver
}
