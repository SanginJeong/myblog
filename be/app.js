const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api',indexRouter);
const mongoURI = 'mongodb://localhost:27017/blog';

mongoose.connect(mongoURI,{useNewUrlParser:true})
.then(()=>{
  console.log("mongoose connected");
})
.catch((error)=>{
  console.log("connection fail", error);
})

app.listen(5000,()=>{
  console.log("server on PortNum : 5000");
})

