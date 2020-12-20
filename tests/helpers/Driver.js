const {Builder} = require('selenium-webdriver')
const {By, Capabilities} = require('selenium-webdriver')
const assert = require('assert').strict;

class Driver {
  constructor(browser) {
    const capabilities = Capabilities[browser]()
    
    this.driver = new Builder()
      .withCapabilities(capabilities)
      .build()

    this.driver.manage().window().maximize()
  }

  async openPage(path) {
    await this.driver.get(path)
  }

  async findElementBy(findType, value) {
    return await this.driver.findElement(By[findType](value))
  }

  async findElementByName(name) {
    return await this.findElementBy('name', name)
  }


  async findElementByCSS(selector) {
    return await this.findElementBy('css', selector)
  }

  async findElementByXpath(xpath) {
    return await this.findElementBy('xpath', xpath)
  }

  async fillElementByName(name, text) {
    const el = await this.findElementByName(name)
    el.sendKeys(text)
    return el
  }

  async clickElementByName(name) {
    const el = await this.findElementByName(name)
    el.click()
    return el
  }

  async clickElementByCSS(selector) {
    const el = await this.findElementByCSS(selector)
    el.click()
    return el
  }

  async clickElementByXpath(xpath) {
    const el = await this.findElementByXpath(xpath)
    el.click()
    return el
  }

  async checkPageUrl(url) {
    const currentUrl = await this.driver.getCurrentUrl()
    assert.strictEqual(currentUrl, url);
  }
  
  async quit() {
    await this.driver.quit()
  }
}

module.exports = {Driver}