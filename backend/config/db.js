import mongoose from "mongoose";

const connectionDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URI);
  console.log(`Database connected. ${conn.connection.host}`);
};

export default connectionDB;
