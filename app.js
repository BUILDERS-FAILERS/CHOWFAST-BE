import express from "express";
import mongoose from "mongoose";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as redis from "redis";
import config from "./config/config";
import expressConfig from "./frameworks/webserver/express";
import routes from "./frameworks/webserver/routes";
import serverConfig from "./frameworks/webserver/server";
import mongoDbConnection from "./frameworks/database/mongoDB/connection";
import redisConnection from "./frameworks/database/redis/connection";
// middlewares
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";

const app = express();
const server = require("http").createServer(app);

// express.js configuration (middlewares etc.)
expressConfig(app);

// server configuration and start
serverConfig(app, mongoose, server, config).startServer();

// DB configuration and connection create
mongoDbConnection(mongoose, config, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, // Timeout for selecting a server
//   heartbeatFrequencyMS: 10000,   // Frequency of sending heartbeat to the server
//   keepAlive: true,
}).connectToMongo();

const redisClient = redisConnection(redis, config).createRedisClient();
// console.log("Redis client:", redisClient);
// console.log("Redis client connected:", redisClient && redisClient.connected);
// Check if the Redis client emits the 'ready' event, which indicates a successful connection
redisClient.on('ready', () => {
    console.log('Redis client connected:', redisClient.connected);
  });
  
  redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
  });

// routes for each endpoint
routes(app, express, redisClient);

// error handling middleware
app.use(errorHandlingMiddleware);

// Expose app
export default app;
