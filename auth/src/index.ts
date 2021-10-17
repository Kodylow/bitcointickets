import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.jwt_key) {
    throw new Error('jwt_key must be defined');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => console.log('listening on 3000'));
};

start();
