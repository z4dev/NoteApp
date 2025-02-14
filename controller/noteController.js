const generator = require("../util/generator");
const memStorage = require("../util/memory.storage");
const model = require("../model/note.model");

exports.getAllNotes = (req, res) => {
  // const seqId = generator.generate();
  // memStorage.store.setItem(seqId, "1st_key");
  // const seqId_2 = generator.generate();
  // memStorage.store.setItem(seqId_2, "2nd_key");
  // var keys = memStorage.getKeys(memStorage.store);
  const values = memStorage.getValues(memStorage.store);
  console.log("values............ " + JSON.stringify(values));
  res.status(200).send(JSON.stringify(values));
};

exports.saveNote = (req, res) => {
  const seqId = generator.generate();
  var createdBy = "admin";
  var createdOn = new Date();
  var title = req.body.title;
  var content = req.body.content;
  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "title and content should not be empty" });
  }
  const Note = model.Note;
  var noteObj = new Note(seqId, title, content, createdBy, createdOn);
  memStorage.store.setItem(seqId, noteObj);
  res.status(201).send("Successfully note saved");
};

exports.updateNote = (req, res) => {
  var createdBy = "admin";
  var createdOn = new Date();
  var noteId = req.body.noteId;
  var title = req.body.title;
  var content = req.body.content;
  if (!noteId) {
    return res.status(500).send({ error: "noteId should not be empty" });
  }
  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "title and content should not be empty" });
  }
  const noteItem = memStorage.store.getItem(noteId);
  if (!noteItem) {
    return res.status(500).send({ error: "Note id is not exist" });
  }
  const Note = model.Note;
  var noteObj = new Note(noteId, title, content, createdBy, createdOn);
  memStorage.store.setItem(noteId, noteObj);
  return res.status(200).send("Successfully note ubdated");
};

exports.deleteNote = (req, res) => {
  var noteId = req.params.noteId;
  if (!noteId) {
    return res.status(500).send({ error: "can't delete empty noteId" });
  }
  const noteItem = memStorage.store.getItem(noteId);
  if (!noteItem) {
    return res.status(500).send({ error: "Note id is not exist" });
  }
  memStorage.store.removeItem(noteId);
  return res.status(200).send("Successfully note deleted");
};
