const notes = require("../src/notes");

const TEST_TITLE = "test1234";
const TEST_TEXT = "testing 123";

test("test get notes", () => {
  const total = notes.getNotes().length;
  notes.addNote(TEST_TITLE, TEST_TEXT);
  const newTotal = notes.getNotes().length;
  expect(newTotal).toStrictEqual(total + 1);
  notes.deleteNote(TEST_TITLE);
});
