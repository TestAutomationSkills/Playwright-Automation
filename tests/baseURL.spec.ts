import {test} from "@playwright/test"

test('Test base url', async({page})=>{


    await page.goto("/");

})