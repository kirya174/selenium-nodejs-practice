const {Builder, By, } = require("selenium-webdriver");
const randomString = require("randomString")

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function radioButtonForm() {
    // Title, description and radiobutton selection
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys(randomString.generate(20)); // 20 chars title
        await driver.findElement(By.css("#description")).sendKeys(randomString.generate(20)); // 20 chars description
        await driver.findElement(By.css("div:nth-child(2) > label > span.custom-control-description")).click();
        await driver.findElement(By.css("#submit")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
radioButtonForm()