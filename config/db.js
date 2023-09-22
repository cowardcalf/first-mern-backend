import mongoose from "mongoose";

const connectDB = async dbUrl => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
