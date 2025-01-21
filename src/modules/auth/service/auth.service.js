import sendEmail from '../service/sendEmail.js';
import userModel from "../../../DB/models/User.model.js";
import * as bcrypt from "bcrypt";
import cryptojs from "crypto-js";


export const register = async (req, res) => {
  try {

    const { userName, email, password, confirmedPassword, phone} = req.body;

    if (password != confirmedPassword) {
      return res.status(422).json({message: "Password and Confirmed Password should be the same",});
    }

    if (await userModel.findOne({ email })) {
      return res.status(409).json({ message: "This email is already exist" });
    }

    const encryptPhone = cryptojs.AES.encrypt(phone, process.env.SECRETKEY);

    const hashPassword = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUND))

    const user = await userModel.create({ userName, email, password:hashPassword, phone:encryptPhone});

    await sendEmail(email,'Thanks For Registration', userName);

    const objectUser = user.toObject()
    delete objectUser.password
    

    res.status(200).json( {message: "Welcome to register page!", objectUser});
  } catch (error) {
    res.status(500).json({message: "Server Error" ,error : error.message});
  }
};


//login

export const login = async (req, res) => {
  try {

    const {email, password} = req.body;

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "Email is not exist" });
    }

    const match = bcrypt.compareSync(password, user.password)

    if (!match) {
      return res.status(404).json({ message: "Invalid Password" });
    }

    const objectUser = user.toObject()
    delete objectUser.password

    res.status(200).json( {message: "Welcome to Saraha App", objectUser});
  } catch (error) {
    res.status(500).json({message: "Server Error" ,error : error.message});
  }
};

