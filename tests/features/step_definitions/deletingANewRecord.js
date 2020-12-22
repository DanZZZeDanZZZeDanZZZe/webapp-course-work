// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.deletingANewRecord = (driver) => {
  Given('I am on page by path {string}', async function (string) {
    await driver.checkPageUrl(string)
  })

  When('I press delete button with text {string}', async function (string) {
    await driver.clickElementByXpath(`//form/button[text() = '${string}']`)
    await sleep(3000)
  })

  Then('I see that there is no note with text {string}', async function (
    string
  ) {
    let flag = false
    try {
      await driver.findElementByXpath(`//main//span[text() = '${string}']`)
    } catch (e) {
      flag = true
    }

    if (!flag) throw new Error('The item was not deleted')
  })

  return driver
}
