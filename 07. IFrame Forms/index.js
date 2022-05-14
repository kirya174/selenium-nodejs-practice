const {Builder, By, Key, } = require("selenium-webdriver");
const randomString = require("randomString")

const driver = new Builder()
    .forBrowser("firefox")
    .build();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
    } 
    

async function iframeForm() {
    
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0); // switch to first iframe on a page
        await delay(1000)
        await driver.findElement(By.css("#mG61Hd > div.RH5hzf.RLS9Fe > div.lrKTG > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input")).sendKeys("Thats My Name"); 
        await driver.actions().sendKeys(Key.TAB).perform(); // press Tab to switch to another element
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN)).perform(); // press arrow down key 2 times to select 3rd element
        await driver.actions().sendKeys((Key.chord(Key.TAB, Key.TAB, Key.TAB))).perform(); // press Tab 3 times to switch to another element
        
        await delay(1000);
        await driver.actions().sendKeys(Key.SPACE).perform(); // select option 4 from dropdown
        await delay(1000);
        // await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        // doesn't select option when running test, only in debug...
        await driver.actions().sendKeys(Key.ENTER).perform();

        // enter date
        await driver.actions().sendKeys(Key.chord(Key.TAB, "10")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "12")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "1995")).perform();

        await driver.actions().sendKeys((Key.chord(Key.TAB, Key.SPACE))).perform(); // select option 1
        
        await driver.actions().sendKeys((Key.chord(Key.TAB, Key.TAB, Key.SPACE))).perform(); // check checkbox
        
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Good Enough")).perform();

        // await driver.actions().sendKeys((Key.chord(Key.TAB, Key.SPACE))).perform(); // click submit button

    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
iframeForm()