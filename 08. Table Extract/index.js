const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();


async function extractTable() {
    // extract elements from smart table
    let results = [];
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/tables/smart-table");
        
        // for each page of the table
        for (let i = 1; i < 6; i++) {
            let rows = await driver.findElements(By.xpath("//tbody//tr"));
            
            // for each row of the table
            for (const row of rows) {
                let rowData = await row.getText();
                let user = rowData.split(/\n/);
                results.push({
                    id: user[0],
                    firstName: user[1],
                    lastName: user[2],
                    usernames: user[3],
                    email: user[4],
                    age: user[5],
                })
            }

            // go to the next page (clicking "next" button)
            await driver.findElement(By.css(".page-link-next")).click();
        }
  
        console.table(results);

    } catch (error) {
        console.log(error);
    }
}

// run command "node index"
extractTable()