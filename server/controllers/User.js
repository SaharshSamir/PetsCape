const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const Request = require('../models/RequestSchema')

const signup = async (req, res) => {
  var { name, email, password, cpassword} = req.body;
  if (!name || !email || !password || !cpassword)
    res.status(422).send("Enter all fields");
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).send("User with this email already exists");
    } else if (password !== cpassword) {
      res.status(422).send("Passwords do not match");
    } else {

      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;
      const user = new User({ name, email, password });
      const saveUser = await user.save();
      if (saveUser) res.status(200).send("User created successfully");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(200)
        .send({ ok: false, message: "Email or password cannot be blank" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isValid = await bcrypt.compare(password, userLogin.password);
      if (!isValid) {
        res.status(200).json({ ok: false, message: "Incorrect Credentials" });
      } else {
        const token = jwt.sign(
          {
            _id: userLogin._id,
            name: userLogin.name,
          },
          process.env.JWT_PRIVATE_KEY,
          {
            expiresIn: "14000000m",
          }
        );
        return res
          .status(200)
          .json({ ok: true, message: "Login Successfull!", token, userLogin });
      }
    } else {
      res.status(200).send({ ok: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const jwtVerify = async (req, res) => {
  const token = req.headers.authorization;
  console.log(`token: ${token}`);
  if (!token) {
    return res.send(null);
  }

  const decodeToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  if (decodeToken) {
    const user = await User.findById(decodeToken._id)
    return res.send({ user });
  }
  res.send(null);
};

const sendRequest = async(req,res)=>{
  const {hostId,title,description,Sdate,Stime,Edate,Etime} = req.body;
  try {
    const from = {Sdate,Stime};
    const to = {Edate,Etime};
    const check = await Request.find({title:title});
    console.log(check)
    if(!(check.length==1)){
      const newRequest = new Request({hostId,title,description,from,to,isPending:true});
    const result = await newRequest.save();
    if(result) {
      const user = await User.findById(req.user._id);
      console.log("user",user)
      var userRequest=[]
      console.log("user.UserRequest",user.userRequest)
      if(user.userRequest) {
      userRequest = user.userRequest;
    }
    userRequest.push({_id:result._id});
    console.log("array",userRequest)
      const updateUser = await User.findByIdAndUpdate(req.user._id,{userRequest});
      if(updateUser)  res.status(200).send({ ok: true, message: "Request Sent Successfully!" });
      console.log("here",updateUser)
    }else{
      res.status(200).send({ ok: false, message: "Request Already Exists" });
    }
    
    }else{
      res.status(200).send({ ok: false, message: "Bad Error" });
    }
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  signup,
  login,
  jwtVerify,
  sendRequest
};
