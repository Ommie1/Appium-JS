import addNoteScreen from "./add-note.screen";

class EDITNOTESCREEN {
  async skipTutorials() {
    await addNoteScreen.skipBtn.click();
    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  }
  async addAndSaveNote(noteHeading, noteBody) {
    await addNoteScreen.addNoteTxt.click();
    await addNoteScreen.txtOption.click();
    await expect(addNoteScreen.txtEditing).toBeDisplayed();
    await addNoteScreen.noteHeading.setValue(noteHeading);
    await addNoteScreen.noteBody.setValue(noteBody);
    await addNoteScreen.saveNote();
  }
  get todoItemTitle() {
    return $('//*[@text="Fruits"]');
  }
  get moreBtn() {
    return $("~More");
  }
  get dltBtn() {
    return $('//*[@text="Delete"]');
  }
  get okBtn() {
    return $('//*[@text="OK"]');
  }
}
export default new EDITNOTESCREEN();
