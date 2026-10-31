import {test} from "@playwright/test"

test("Testing context fixture", async({context})=>{


    const page = await context.newPage();
    await page.goto("https:google.com");



})

test.only('Testing multiple pages in one context', async({context})=>{


    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page1.locator("//input[@name='username']").fill("Admin");
    await page1.locator("//input[@name='password']").fill("admin123");
    await page1.locator("//button[@type='submit']").click();

    const page2 = await context.newPage();
    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page2.waitForTimeout(10000);

})