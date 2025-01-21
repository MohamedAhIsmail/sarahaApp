import * as dotenv from 'dotenv';
dotenv.config({});

import express from "express";
import bootStrap from "./src/app.controller.js";


const app = express();
const port = process.env.PORT || 8888;

bootStrap(app, express);


app.listen(port, () => {
  console.log(`Saraha APP is Running on ${port}`);
});
