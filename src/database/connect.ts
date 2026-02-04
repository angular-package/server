import mongoose from 'mongoose';

// Get config
import {
  mongooseHost,
  mongoosePort,
  mongooseCluster,
  mongooseDb,
  mongooseUser,
  mongooseUrl
} from "./config";

console.log('MONGODB_URI', mongooseUrl);

// Create connection.
export const connection = mongoose.createConnection(mongooseUrl, {
  keepAlive: true,
  socketTimeoutMS: 0,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`Mongo connection`)
  console.log(`- host: ${mongooseHost}`);
  console.log(`- port: ${mongoosePort}`);
  console.log(`- cluster: ${mongooseCluster}`);
  console.log(`- db: ${mongooseDb}`);
  console.log(`- user: ${mongooseUser}`);
  console.log(`opened on ${mongooseUrl}`);
  console.log(`--------------------------------------------------------------------------------`);
  // we're connected!
});

export default connection;
