import {chromium, test} from "@playwright/test"

test('Cookies print', async()=>{


    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://google.com");

    const cookies = await context.cookies();

    console.log("Cookies:" , cookies)


})