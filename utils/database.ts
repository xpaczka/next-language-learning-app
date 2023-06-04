// Third-party imports
import mongoose from 'mongoose';

const DB = process.env.DATABASE!.replace('<PASSWORD>', process.env.DATABASE_PASSWORD!);

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Database connection succesful...');
  } catch (err: any) {
    console.error(err);
  }
};
