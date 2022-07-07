const editNoteScreen = require("../../screenobjects/android/edit-note.screen");
const addNoteScreen = require("../../screenobjects/android/add-note.screen");

describe("Working with real app", () => {
  it("Delete a note", async () => {
    editNoteScreen.skipTutorials();
    editNoteScreen.addAndSaveNote("Fruits", "Apple\nBanana\nGrapes");
    await expect(editNoteScreen.todoItemTitle).toBeDisplayed();
    await editNoteScreen.todoItemTitle.click();
    await editNoteScreen.moreBtn.click();
    await editNoteScreen.dltBtn.click();
    await editNoteScreen.okBtn.click();
    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  });
});
