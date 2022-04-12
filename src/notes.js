const fs = require("fs");
const path = require("path");

const NOTES_FILE_PATH = path.join(__dirname, "notes");

const getFilePath = (fileName) => {
  return `${NOTES_FILE_PATH}/${fileName.toLowerCase()}.txt`;
};

const addNote = (title, text) => {
  fs.writeFileSync(getFilePath(title), text);
};

const getNotes = () => {
  const files = fs.readdirSync(NOTES_FILE_PATH);
  files.forEach((file) => {
    file.replace(".txt", "");
  });
  return files;
};

const appendToNote = (title, text) => {
  fs.appendFileSync(getFilePath(title), text);
};

const deleteNote = (title) => {
  fs.rmSync(getFilePath(title));
};

module.exports = {
  addNote,
  getNotes,
  appendToNote,
  deleteNote,
};
