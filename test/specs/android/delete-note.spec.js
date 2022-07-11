import editNoteScreen from "../../screenobjects/android/edit-note.screen";
import addNoteScreen from "../../screenobjects/android/add-note.screen";

describe("Working with real app", () => {
  before(async () => {
    editNoteScreen.skipTutorials();
    editNoteScreen.addAndSaveNote("Fruits", "Apple\nBanana\nGrapes");
  });

  it("Delete a note", async () => {
    await expect(editNoteScreen.todoItemTitle).toBeDisplayed();
    await editNoteScreen.todoItemTitle.click();
    await editNoteScreen.moreBtn.click();
    await editNoteScreen.dltBtn.click();
    await editNoteScreen.okBtn.click();
    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  });
});
