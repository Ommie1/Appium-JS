describe("Working with real app", () => {
  it("Skip the tutorial screen", async () => {
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();
  });

  it("Add a note", async () => {
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).setValue("Car");
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).setValue("Wash\nTunning");
    await driver.back();
    await driver.back();
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("Wash\nTunning");
  });

  it("Delete a note", async () => {
    await driver.pause(3000);
    await expect($('//*[@text="Car"]')).toBeDisplayed();
    await $('//*[@text="Car"]').click();
    await $("~More").click();
    await $('//*[@text="Delete"]').click();
    await $('//*[@text="OK"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });
});
