import {test, expect} from "@playwright/test"

test('Validating Frames', async({page}, testInfo) =>{


    /*

    page.frame() -- Not auto waited
    page.frameLocator() - Auto waited

    page.frames() - will capture all the pages

    */

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame = page.frames();
    console.log("Number of frames : ", frame.length)

    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("text")
// Capture screenshot of the complete page
  const screenshot = await page.screenshot();

  // Attach screenshot to Allure report
  await testInfo.attach("Frame Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
    
    await page.pause();
    //expect(page).toHaveURL()


})
