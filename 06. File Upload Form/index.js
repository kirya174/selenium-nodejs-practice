const {Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function fileUploadForm() {
    // File picker is an input field. Exact absolute path to file should be provided
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        
        // send path to the file __dirname = path to the folder where current script file is stored
        await driver.findElement(By.xpath(`//input[@formcontrolname="file"]`)).sendKeys(__dirname + "\\001.jpg");
        
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
fileUploadForm()