import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv";
/////
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postsRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://hadhemibenmansour:hadhemibenmansour@cluster0.bxed8we.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server runing on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
