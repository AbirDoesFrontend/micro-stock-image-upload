import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_photos",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');

  } catch (error) {
    isConnected = false; // Set isConnected to false if the connection fails
    console.error('MongoDB connection error:', error.message);
    throw error; // rethrow the error to propagate it to the caller
  }
};
