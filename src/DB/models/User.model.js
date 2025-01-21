import { model, Schema } from "mongoose";

const roleType = {
  user: "user",
  admin: "admin",
  superAdmin: "super admin",
};

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "This Field is Required"],
    minlenght: 3,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  dateOfBirth: Date,
  image: String,
  confirmEmail: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: Object.values(roleType),
    default: roleType.user,
  },
}, {timestamps: true});



const userModel = model("user", userSchema)


export default userModel;