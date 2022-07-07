// appPackage: Full name of application (com.google.android.youtube)
// appActivity: Certain screen/functionality of an application
// appActivity: helps autoamtion to access screen directly
// appActivity: Saves time
// appActivity: Stablize tests
// Current Package: "io.appium.android.apis"
// Current Activity: ".app.AlertDialogSamples"
// Syntax: appPackage,appPackage+appActivity
// Accept/Dismiss alert commands provided by WDIO
// Scroll to end: Its not preferable
// Scroll to view: More stable

describe("Working with native android native features", () => {
  it("Access mobile screen directly", async () => {
    //Access screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    // Wait
    await driver.pause(300);
    // Assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Handling Alert", async () => {
    //Access screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
  });

  it("Handling vertical Scroll", async () => {
    //Access screen
    await $("~App").click();
    await $("~Activity").click();
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    // );
    // await $("~Secure Surfaces").click();
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    // Assertion
    await expect($("~Secure Dialog")).toExist();
  });

  it("Handling horizontal Scroll", async () => {
    //Access screen
    //Access screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );

    await driver.pause(3000);
  });
  it.only("Handling date widget", async () => {
    //Access screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );
    // Get current date
    const date = $("android.widget.TextView");
    const currentDate = await date.getText();
    // Click on change date button
    await $("~change the date").click();
    // Scroll forward
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    // Select the date
    await $('//*[@text="10"]').click();
    // Click on OK button
    await $('//*[@text="OK"]');
    // Date assertion
    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
