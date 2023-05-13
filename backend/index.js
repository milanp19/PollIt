//initial setup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.status(200).json("hello world");
});

app.listen(8080, () => {
  console.log("Server started and listening on port 8080");
});
