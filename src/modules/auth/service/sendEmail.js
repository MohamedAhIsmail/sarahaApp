import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config({});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});


const sendEmail = async (email, subject, userName) => {
  try {
    const mailOptions = {
      from: '"Welcome to Our SarahaAPP 👻" <maddison53@ethereal.email>',
      to: email,
      subject: subject,
      text: `Hello ${userName}, Please Confirm Your Email`,
    };

    await transporter.sendMail(mailOptions);
    
  } catch (error) {
    console.log('Email not sent:', error);
  }
};

export default sendEmail;