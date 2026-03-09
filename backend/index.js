import dotenv from "dotenv";
dotenv.config({ path: ["backend/config/config.env"] });

import express from "express";
import connectionDB from "./config/db.js";

import blogRouter from "./routes/blogRoutes.js";
import uploadImageRoutes from "./routes/uploadImageRoute.js";

// configuration of evvironment variables
// DB connection
connectionDB();

// app instance
const app = express();

// app middlewares
app.use(express.json());

// application routes
app.use("/api/v1", blogRouter);
app.use("/api/v1", uploadImageRoutes);

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
    process.exit(1);
  });
});
