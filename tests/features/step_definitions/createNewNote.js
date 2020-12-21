// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.createNewNote = (driver) => {
  Given('I click on the add button for today', async function () {
    const day = (() => new Date())().getDate()
    await driver.clickElementByXpath(`//main//p[text() = '${day}']/../button`)
    await sleep(2000)
  })

  When('I add a title {string}', async function (string) {
    await driver.fillElementByName('title', string)
  })

  When('I add a text {string}', async function (string) {
    await driver.fillElementByName('text', string)
  })

  When('I add a time {string}', async function (string) {
    await driver.fillElementByName('time', string)
  })

  When('I press button with text {string}', async function (string) {
    await driver.clickElementByXpath(`//form/button[text() = '${string}']`)
  })

  Then('I return to the page by path {string}', async function (string) {
    await sleep(2000)
    await driver.checkPageUrl(string)
  })

  return driver
}
