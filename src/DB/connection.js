import mongoose from "mongoose";

const connection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/SarahaApp")
  .then(() => {
    console.log("Database Connected");
  })
  .catch(()=>{
    console.log("Database Connection error");
  })
};

export default connection;
