import dotenv from "@ev-fns/dotenv";

dotenv({}, dotenv.startup);

import server from "@ev-fns/server";
import app from "./app";
import mongoose from "mongoose";

server({
  app,
  port: +(process.env.PORT || 0) || 3000,
  before: async () => {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      dbName: process.env.MONGODB_DATABASE || "",
    });
  },
  after: async () => {
    console.info(`listening at http://localhost:${process.env.PORT}`);
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
