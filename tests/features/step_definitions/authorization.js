const { Given, When, Then } = require('@cucumber/cucumber')
const { sleep } = require('../../helpers/sleep');

exports.authorization = (driver) => {
  Given('I go to the authorization page by path {string}', async function (path) {
    await driver.openPage(path)
  });
  
  When('I login with user {string} and user {string} password', async function (email, password) {
    await driver.fillElementByName('email', email)
    await driver.fillElementByName('password', password)
  });
  
  When('press to login button', async function () {
    await driver.clickElementByName('login')
  });
  
  Then('I get to the calendar page by path {string}', async function (url) {
    await sleep(4000)
    await driver.checkPageUrl(url)
  });

  return driver
}

