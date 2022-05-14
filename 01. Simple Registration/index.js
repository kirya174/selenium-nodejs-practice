const {Builder, By, } = require("selenium-webdriver");

// if we need to setup a FF options:
// const firefox = require("selenium-webdriver/firefox")
// const options = new firefox.Options();

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function simpleRegistration() {
    // input to email and password fields and pressing the button "register"
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
simpleRegistration()