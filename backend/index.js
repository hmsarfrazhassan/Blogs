import express from "express";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";

// configuration of evvironment variables
dotenv.config({ path: ["backend/config/config.env"] });
// DB connection
connectionDB();

// app instance
const app = express();

// app running port
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});

// handeled unhandled exception
process.on("unhandledRejection", (error) => {
  console.log("Error: ", error);
  console.log(`Server is shutting down due to unhandeled rejection error.`);

  server.close(() => {
    process.emit(1);
  });
});
