import {test} from "@playwright/test"

test('Screenshot', async({page}, testInfo)=>{


    await page.goto("https://google.com/")

    const screenshot = await page.screenshot();

    await testInfo.attach("Google screenshot", {
        body: screenshot,
        contentType : "image/png"
    })
    //await page.screenshot({path: 'screenshots/sceen1.jpg'})
})