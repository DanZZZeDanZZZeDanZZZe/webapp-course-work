// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.changingANote = (driver) => {
  Given('I click on my note with text {string}', async function (string) {
    await driver.clickElementByXpath(`//main//span[text() = '${string}']`)
  })

  When('I add a new title {string}', async function (string) {
    await driver.fillElementByName('title', string)
  })

  When('I press save button with text {string}', async function (string) {
    await driver.clickElementByXpath(`//form/button[text() = '${string}']`)
    await sleep(3000)
  })

  Then('I see a new title with text {string}', async function (string) {
    await driver.findElementByXpath(`//main//span[text() = '${string}']`)
  })

  return driver
}
