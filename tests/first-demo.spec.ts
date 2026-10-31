import {test, expect} from "@playwright/test"

test('Verify title of page', async ({page})=>{

    await page.goto("https://google.com")

    expect(page).toHaveTitle('Google')

    let title = await page.title();
    console.log("Page title is : ", title)

   // await expect(page.locator("")).toBeChecked();

})