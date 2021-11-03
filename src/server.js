import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
// import models from "./db/models/index.js";

const server = express()

const { PORT } = process.env

server.use(cors())

server.use(express.json())

server.listen(PORT, async () => {
    console.log("server on port:", PORT);
    await connectDB()
  });