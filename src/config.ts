// // Allowed origins array
// const allowedOrigins = [
//   `http://${ORIGIN_ADDRESS}:${ORIGIN_PORT}`,
//   'https://studio.apollographql.com',
// ];

// // Express
// const app = express();

// // For Express routes (REST, GraphQL, etc.)
// import cors from 'cors';
// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true,
// }));

// // For socket.io
// const httpServer = createServer(app);
// const io = new Server(httpServer, { 
//   cors: { 
//     origin: allowedOrigins,
//     credentials: true,
//   }
// });


// Origin.
// export const ORIGIN_ADDRESS = "localhost";
// export const ORIGIN_PORT = 4200;
export const ORIGIN_ADDRESS = "studio.apollographql.com";
export const ORIGIN_PORT = 443;

export const ORIGIN = `https://${ORIGIN_ADDRESS}:${ORIGIN_PORT}`;

// Server.
export const ADDRESS = "localhost";
export const PORT = 3000;

// jsonwebtoken.
export const jwtSecretKey = "jwt-secret-key";
export const KEY_SIZE = 256;
export const KEY_ITERATIONS = 10;
