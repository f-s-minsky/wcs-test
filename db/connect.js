import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log(
      `MongoDB is in the House !: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
