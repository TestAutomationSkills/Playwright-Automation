import {test} from "@playwright/test"

test('New tab', async({browser})=>{


    const context = await browser.newContext();
    const page =  await context.newPage();

    page.goto("https://freelance-learn-automation.vercel.app/login");

    const[newPage] =  await Promise.all([


        context.waitForEvent('page'),
        page.locator("//div[@class='social']//a[contains(@href, 'facebook')]").click()


    ])

    await newPage.locator("//span[text()='Email address or phone number']").fill("23121");

    await newPage.pause();

    page.getByRole('checkbox', {name: 'Subscribr'})
    


})