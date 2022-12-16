const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  // const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/home')
  const element = await page.waitForSelector('[data-testid="BtnSignIn"] span')
  console.log(element.textContent)
  await browser.close()
})()
