import {test } from "@playwright/test";

test('test browser fixture', async({browser})=>{


    const context1 =await  browser.newContext();
    const page1 = await context1.newPage();

    await page1.goto("https://google.com");

    const context2 = await browser.newContext();
    const page2 = await browser.newPage();

    await page2.goto("https://facebook.com")

})