import {expect, test} from "@playwright/test"

test('Valid test' , async({page})=>{

    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google")

})

test('In-Valid test' , async({page})=>{

    await page.goto("https://facebook.com");
    await expect(page).toHaveTitle("Google")
    
})

