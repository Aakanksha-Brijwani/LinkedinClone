import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRouters from "./routes/posts.routes.js";
import userRouters from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(postRouters);
app.use(userRouters);

app.use(express.json());

const start = async () => {
  const connectDB = await mongoose.connect(
    "mongodb://aakankshabrijwani_db_user:PuO6pMpWvl1n2wxk@ac-9x4ah3u-shard-00-00.b88c60j.mongodb.net:27017,ac-9x4ah3u-shard-00-01.b88c60j.mongodb.net:27017,ac-9x4ah3u-shard-00-02.b88c60j.mongodb.net:27017/?ssl=true&replicaSet=atlas-6v27h7-shard-0&authSource=admin&appName=apnaproconnect",
  );

  app.listen(5000, () => {
    console.log("Server is running on port 9090");
  });
};
start();
