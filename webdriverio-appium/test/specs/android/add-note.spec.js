const addNoteScreen = require("../screenobjects/android/add-note.screen");

describe("Working with real app", () => {
  it("Skip the tutorial screen", async () => {
    await addNoteScreen.skipBtn.click();
    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  });

  it("Add a note", async () => {
    await addNoteScreen.addNoteTxt.click();
    await addNoteScreen.txtOption.click();
    await expect(addNoteScreen.txtEditing).toBeDisplayed();
    await addNoteScreen.noteHeading.setValue("Fruits");
    await addNoteScreen.noteBody.setValue("Apple\nBanana\nGrapes");
    await addNoteScreen.saveNote();
    await expect(addNoteScreen.addNoteTxt).not.toBeDisplayed();
  });
});
