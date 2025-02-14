const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const noteRouter = require("./route/noteRoute");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server starting");
});
app.use("/api/v1", noteRouter);
app.listen(3000, () => {
  console.log("Server start...............");
});
