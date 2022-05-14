const {Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function dropdownForm() {
    // dropdown and other types of lists
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        
        // select elements from dropdown list with multiple choice
        const dropdownMenu1 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")); 
        await dropdownMenu1.click(); // open dropdown menu with multiple choice
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await dropdownMenu1.click(); // close dropdown menu with multiple choice

        // select elements in a visible list (option)
        await driver.findElement(By.xpath(`//select[@formcontrolname="select2"]/option[@value="1: 'saab'"]`)).click(); 
        await driver.findElement(By.xpath(`//select[@formcontrolname="select2"]/option[@value="3: 'audi'"]`)).click(); 
        
        // select from dropdown with single choice
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        
        // select from dropdown option
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']")).click();
        await driver.findElement(By.xpath("//option[@value='opel']")).click();

        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
dropdownForm()