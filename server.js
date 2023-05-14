const express = require("express");
const colors = require("colors");
const { connectDB } = require("./config/db");
const morgan = require("morgan");
const { router } = require("./routes/products");
const server = express();

connectDB();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/v1/products", router);

server.listen(5000, () => {
  console.log("Server is running on port 5000".cyan.underline);
});
