//#region imports.
// Apollo.
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

// Cors.
import cors from 'cors';

// Express.
import express from 'express';

// Server.
import { Server } from 'socket.io';

// Express-jwt.
import { expressjwt } from "express-jwt";

// http.
import { createServer } from 'http';

// Config.
import {
  ORIGIN_ADDRESS,
  jwtSecretKey as secret,
  PORT,
  ADDRESS,
  ORIGIN_PORT
} from './config';

// Auth token.
import { AuthToken } from './auth/auth-token.class';

// Connect to mongo database.
import "./database/connect";

// Graphql resolvers.
import resolvers from "./graphql/resolvers";

// Graphql typeDefs.
import typeDefs from "./graphql/typeDefs";

// Database to context.
import { db } from './database/db';
//#endregion imports.

// Use cors.
const allowedOrigin = {
  address: ORIGIN_ADDRESS,
  port: ORIGIN_PORT,
};

const origin = `http://${allowedOrigin.address}:${allowedOrigin.port}`;

// Express.
// Http + socket.io.
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin } });

// Apollo server.
let apolloServer: ApolloServer;

// CORS is a node.js package for providing a Connect/Express middleware that can be used to
// enable CORS with various options.
app.use(cors({ origin }));

// Apollo graphql.
(async function startApolloServer(typeDefs, resolvers) {
  let user;
  apolloServer = new ApolloServer({
    context: ({ req }) => {
      // try to retrieve a user with the token.
      new AuthToken().verify(req.headers.authorization, (error, decoded) => user = decoded);

      return {
        // Add db to the context.
        db,

        // Add user to the context.
        user
      };
    },
    resolvers,
    typeDefs,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();

  // Apollo graphql middleWare.
  apolloServer.applyMiddleware({ app });
})(typeDefs, resolvers);

// Socket.io
io.on('connection', (socket) => console.log(`Websocket connection opened`, socket.id));

// JWT Authorization.
// app.use(expressjwt({
//   algorithms: ['HS256'],
//   credentialsRequired: false,
//   getToken: (req) => req.headers.authorization,
//   secret,
// }));

// Start message.
// app.get("/", (req, res, next) => res.send(`🚀 Graphql playground is ready at http://${ADDRESS}:${PORT}${apolloServer.graphqlPath}`));

// Express listen
httpServer.listen(PORT, () => {
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`🚀 Express server is listening at port http://${ADDRESS}:${PORT}`);
  console.log(`🚀 Graphql playground is ready at http://${ADDRESS}:${PORT}${apolloServer.graphqlPath}`);
});

export default httpServer;
