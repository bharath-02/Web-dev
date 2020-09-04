const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
await page.setViewport({
  width: 1434,
  height: 1768,
  deviceScaleFactor: 1,
});

  await page.goto('https://www.guvi.io');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();


//Putter -- > CDT & chromium + Jest 
