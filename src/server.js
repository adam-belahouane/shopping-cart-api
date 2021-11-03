import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import productsRouter from "./services/products/index.js";
import { connectDB } from "./db/index.js";
// import models from "./db/models/index.js";

const server = express()

const { PORT } = process.env

server.use(cors())

server.use(express.json())

server.use("/products", productsRouter)


console.table(listEndpoints(server))
server.listen(PORT, async () => {
    console.log("server on port:", PORT);
    await connectDB()
  });