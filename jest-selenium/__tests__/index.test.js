#!/usr/bin/env node
const { getEnv, wait } = require('../src/custom_functions.js');
require('dotenv').config();
console.log(process.env);

const {Builder, Capabilities, By, until, Key} = require('selenium-webdriver');
const SELENIUM_REMOTE_URL = getEnv('SELENIUM_REMOTE_URL');
console.log(SELENIUM_REMOTE_URL)
const APP_URL = getEnv('APP_URL');
console.log(APP_URL)

test('T001 - open valid page and check title', async ()=> {
  let builder = new Builder()
  let driver = builder
    .forBrowser('chrome')
    .build();
  try {
    await driver.get(APP_URL)
    const xpath = '//h1'
    await driver.wait(until.elementLocated(By.xpath(xpath)), 10e3);
    const titles = await driver.findElement(By.xpath(xpath)).getText();
    await expect(titles).toBe('Welcome to Next.js!');
    await driver.quit()
  } catch (e) {
    await driver.quit()
    console.log(e);
    throw e
  }


}, 100e3); // 100 segs
