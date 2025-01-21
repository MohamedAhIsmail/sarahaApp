import { Router } from "express";
import * as userService from "./service/user.service.js";
import multer from "multer";
const userRoutes = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

userRoutes.post(
  "/upload-image",
  upload.single("image"),
  userService.uploadImage
);

export default userRoutes;