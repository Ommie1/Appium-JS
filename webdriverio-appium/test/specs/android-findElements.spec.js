// Accessblity ID : supports cross platform iOS/Android
// Accessblity ID : Most preffered option
// Accessblity ID : its not dependent on text change
// Accessblity ID : denoted by '~'
// Class name : Can't be unique
// Class name : Multple elements use same class
// xPath : Preferred option after Accessblity ID
// xpath syntax: (//tagname[@attribute=value])
// resource ID: Sometimes its unique
// $$ : For accessing multiple elements
// //*: its xpath for direct access of attribute

describe("Grabbing element stratgies", () => {
  it("Grab the element by accessiblity ID", async () => {
    // find the element with accessiblity ID
    const appOption = await $("~App");
    // Click on it
    await appOption.click();
    // Put assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Grab the element by class", async () => {
    // find the element with class name
    const className = await $("android.widget.TextView");
    console.log(className);
    console.log(await className.getText());
    // put assertion
    await expect(className).toHaveText("API Demos");
  });

  it("Grab the element by xPath", async () => {
    // find the element with accessiblity ID
    const appOption = await $("~App");
    // Click on it
    await appOption.click();
    // Click alert dialogs
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    // Click list option
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    // Click option with text tag
    await $('//android.widget.TextView[@text="Command one"]').click();
    // Put assertion
    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 0 , Command one");
  });

  it("Grab multiple elements", async () => {
    const expectedItems = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];

    actualItems = [];
    const textList = await $$("android.widget.TextView");
    for (const items of textList) {
      actualItems.push(await items.getText());
    }
    console.log(actualItems);
    // Assertion
    await expect(actualItems).toEqual(expectedItems);
  });

  it.only("Working with input fields", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    const textField = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    await textField.addValue("USA");
    await expect(textField).toHaveText("USA");
  });
});
