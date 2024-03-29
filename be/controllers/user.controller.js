const User = require("../model/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.createUser = async (req,res) => {
  try {
    const {email, name, password} = req.body;
    const user = await User.findOne({email}) // email : email
    if(user) {
      throw new Error("이미 가입된 유저입니다.");
    }
    
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    
    const newUser = new User({email,name,password:hash}) // email:email , name:name, password:hash
    await newUser.save();

    res.status(200).json({status: 'OK', newUser})

  } catch (error) {
    res.status(400).json({status:"Fail", error: error.message});
  }
}

userController.loginWithEmail = async(req,res)=>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email},'-createdAt -updatedAt -__v');

    if(user){
      const isMath = bcrypt.compareSync(password, user.password); // password 와 user.password 비교
      if(isMath){
        const token = user.generateToken();
        return res.status(200).json({status:"OK",user,token})
      }
    }
    throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
  } catch (error) {
    res.status(400).json({status:"Fail", error});
  }
}

module.exports = userController;