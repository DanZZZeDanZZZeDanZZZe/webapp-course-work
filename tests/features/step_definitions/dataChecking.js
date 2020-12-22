// eslint-disable-next-line node/no-unpublished-require
const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep')

exports.dataChecking = (driver) => {
  let dataCorrectness = true

  Given('I click on new note with text {string}', async function (string) {
    await driver.clickElementByXpath(`//main//span[text() = '${string}']`)
    await sleep(4000)
  })

  When('I check a title {string}', async function (string) {
    const el = await driver.findElementByName('title')
    const t = await el.getAttribute('value')
    if (t !== string) dataCorrectness = false
  })

  When('I check a text {string}', async function (string) {
    const el = await driver.findElementByName('text')
    const t = await el.getText()
    if (t !== string) dataCorrectness = false
  })

  When('I check a time {string}', async function (string) {
    const el = await driver.findElementByName('time')
    const t = await el.getAttribute('value')
    if (t !== string) dataCorrectness = false
  })

  Then('I see that this is true', async function () {
    if (!dataCorrectness) throw new Error('Wrong data')
  })

  return driver
}
