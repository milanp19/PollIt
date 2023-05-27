//initial setup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.status(200).json("Working?");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
