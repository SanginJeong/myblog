const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
},{timestamps:true});

// Schema에는 필드 뿐 아니라 우리가 원하는 메서드도 정의할 수 있다.
userSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {expiresIn: '1d'});
  return token
}

//백에서 프론트로 유저 정보를 보낼 때 비밀번호 등 필요없는 정보는 안보내도록 하는 메서드
userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password; // 그냥 객체에서 delete
  return obj
}

const User = mongoose.model("User",userSchema);
module.exports = User;