const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("fire server");
    const conn = await mongoose.connect(process.env.dbURI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
