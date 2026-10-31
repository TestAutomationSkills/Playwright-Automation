import{test, expect} from "@playwright/test"

test('Find elements with playwright methods', async ({page, context})=>{
    

    await page.goto("https://www.letskodeit.com/practice");

    await page.getByRole('button', {name:"Open Window"}).click();

    await page.pause();

    page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => dialog.dismiss());

    await page.locator("//div[@class='move']").hover();
    await page.locator("//div[@class='move']").click();
    await page.locator("//div[@class='move']").waitFor({state: 'visible'});
    // await page.locator("//div[@class='move']").click();

    await Promise.all([])
    const pages = context.pages();

})