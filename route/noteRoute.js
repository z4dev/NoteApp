const express = require("express");

const router = express.Router();
const noteController = require("../controller/noteController");

router.get("/notes", noteController.getAllNotes);
router.post("/notes/save", noteController.saveNote);
router.put("/notes/update", noteController.updateNote);
router.delete("/notes/delete/:noteId", noteController.deleteNote);

module.exports = router;
