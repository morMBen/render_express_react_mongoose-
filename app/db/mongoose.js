import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MONGO_USER);
const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pylih7i.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, (error, mongoDBInstance) => {
  if (error) throw new Error('MongoDB connection Error: ' + error);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const { host, port, name } = mongoDBInstance;
    console.log({ host, port, name });
  }
});
