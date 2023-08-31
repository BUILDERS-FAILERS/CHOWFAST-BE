import authRouter from "./auth";
import userRouter from "./user";
import vendorRouter from "./vendor";

export default function routes(app, express, redisClient) {
  app.use("/api/v1/login", authRouter(express, redisClient));
  app.use("/api/v1/users", userRouter(express, redisClient));
  app.use("/api/v1/vendors", vendorRouter(express, redisClient));
}
