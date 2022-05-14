const {Builder, By, } = require("selenium-webdriver");
const moment = require("moment");

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function datePickerForm() {
    // Datepicker actually works as an input field, where you should provide correct format of a date
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");

        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys(moment().format('MMMM DD, YYYY'));
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys(`May 9, 2022 - ${moment().format('MMMM DD, YYYY')}`);

        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
datePickerForm()