// import from selenium lib:
const {Builder, By, Key, util} = require("selenium-webdriver");

// ########### First example ###########
// async function example() {
//     let driver = await new Builder().forBrowser("firefox").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
// }

// import of firefox options from selenium:
const firefox = require("selenium-webdriver/firefox")
// creation of oprions
const options = new firefox.Options();

// options.setPreference("browser.download.dir", "C:\\seleniumdownloads");
// options.setPreference("browser.download.folderList", 2); // 1 - default download folder, 2 - set folder from above, 0 - ask
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv"); // select file types to autodownload

options.setProfile("./SeleniumTutorialFFProfile"); // Set options from profile in the folder 

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://google.com");
