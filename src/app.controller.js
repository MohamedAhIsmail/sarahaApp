import connection from "./DB/connection.js";
import authRoutes from "./modules/auth/auth.controller.js";
import userRoutes from "./modules/user/user.controller.js";

const bootStrap = (app, express) => {
  
  app.use(express.json());

  app.use("/uploads", express.static("upload"));

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Saraha APP!" });
  });


  app.use('/auth', authRoutes)
  app.use('/user', userRoutes)

  connection()

  app.all("*", (req, res) => {
    return res.status(404).json({ message: "API not Found" });
  });

};

export default bootStrap;
