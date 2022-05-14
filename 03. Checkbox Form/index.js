const {Builder, By, } = require("selenium-webdriver");
const randomString = require("randomString")

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function checkboxForm() {
    // Title, description, radiobutton and checkbox selection using XPath
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys(randomString.generate(10)); // 10 chars title
        await driver.findElement(By.xpath("//input[@name='comment']")).sendKeys(randomString.generate(20)); // 20 chars description
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click(); 
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
checkboxForm()