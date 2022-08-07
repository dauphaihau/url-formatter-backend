import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

  dotenv.config();
async function connect() {
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;

  const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mqflh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbUri);
    console.log('DB connected');
  } catch (error) {
    console.log('Could not connect to db');
    process.exit(1);
  }
}

export default connect;
