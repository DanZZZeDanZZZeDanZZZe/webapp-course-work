require('chromedriver')
const { AfterAll } = require('@cucumber/cucumber')

const { Driver } = require('../../helpers/Driver');
const { checkRegistrationPage } = require('./checkRegistrationPage');
const { authorization } = require('./authorization');
const { logOutAtApplication } = require('./logOutAtApplication');

const start = async (driver) => {
  checkRegistrationPage(driver)
  authorization(driver)
  logOutAtApplication(driver)

  AfterAll(async function () {
    await driver.quit()
  })
}

start(new Driver('chrome'))

