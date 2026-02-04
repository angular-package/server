import dotenv from 'dotenv';
dotenv.config();

// mongo database
export const mongooseHost = process.env.MONGODB_HOST;
export const mongoosePort = process.env.MONGODB_PORT;
export const mongooseDb = process.env.MONGODB_DB;
export const mongooseCluster = process.env.MONGODB_CLUSTER;
export const mongooseUser = process.env.MONGODB_USER;
export const mongoosePass = process.env.MONGODB_PASS;

// export const mongooseUrl = `${mongooseHost}:${mongoosePort}/${mongooseDb}`;
export const mongooseUrl = `mongodb+srv://${mongooseUser}:${mongoosePass}@${mongooseCluster}.${mongooseHost}/${mongooseDb}?retryWrites=true&w=majority`;
