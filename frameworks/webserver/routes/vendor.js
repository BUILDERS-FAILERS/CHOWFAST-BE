import vendorController from "../../../adapters/controllers/vendorController";
import vendorDbRepository from "../../../application/repositories/vendorDbRepository";
import vendorDbRepositoryMongoDB from "../../database/mongoDB/repositories/vendorRepositoryMongoDB";
import authServiceInterface from "../../../application/services/authService";
import authServiceImpl from "../../services/authService";
import authMiddleware from "../middlewares/authMiddleware";

export default function vendorRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = vendorController(
    vendorDbRepository,
    vendorDbRepositoryMongoDB,
    authServiceInterface,
    authServiceImpl
  );

  // GET enpdpoints
  router.route("/:id").get(authMiddleware, controller.fetchvendorById);
  router.route("/").get(authMiddleware, controller.fetchvendorsByProperty);

  // POST enpdpoints
  router.route("/").post(controller.addNewvendor);

  return router;
}
