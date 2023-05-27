//initial setup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose");

//middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const polls = require("./models/polls");
const users = require("./models/users");

mongoose.connect("mongodb+srv://gouthamk490:reactnodexpress@cluster0.ogepcou.mongodb.net/GKdb?retryWrites=true&w=majority");
 const connection = mongoose.connection;
 connection.once('open',()=>{
    console.log('Mongodb connection has been established successfully...');
 });

//routes
app.get("/", (req, res) => {
  res.status(200).json("hello world");
});

//Polls

app.get('/polls', async (req,res)=>{
  let data = await polls.find().catch((_)=>{
      res.json("Error finding data");
  });
  res.json(data);
});

app.post("/polls", (req,res)=> {
  console.log(req.body);
  let person = new Polls(req.body);
  polls
  .save()
  .then(_=>{
      res.json("Data Saved")
  }).catch((_)=>{
      res.json("Not Saved");
  });
});

//Users

app.get('/users', async (req,res)=>{
  let data = await users.find().catch((_)=>{
      res.json("Error finding data");
  });
  res.json(data);
});

app.post("/users", (req,res)=> {
  console.log(req.body);
  let person = new Users(req.body);
  users
  .save()
  .then(_=>{
      res.json("Data Saved")
  }).catch((_)=>{
      res.json("Not Saved");
  });
});

//To get a poll on the Selected ID from the database...
app.get("/polls/:id",async (req,res) =>{
  let id=req.params.id;
  let data= await Polls.findById(id).catch((_)=>{
      res.json("Error finding data");
  });
  if(!data) {res.json("No Data");}
  else{res.json(data);}
});

//To get a user on the Selected ID from the database...
app.get("/users/:id",async (req,res) =>{
  let id=req.params.id;
  let data= await Users.findById(id).catch((_)=>{
      res.json("Error finding data");
  });
  if(!data) {res.json("No Data");}
  else{res.json(data);}
});



app.listen(8080, () => {
  console.log("Server started and listening on port 8080");
});
