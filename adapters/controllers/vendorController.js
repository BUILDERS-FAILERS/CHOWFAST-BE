import addVendor from "../../application/use_cases/vendor/add";
import findByProperty from "../../application/use_cases/vendor/findByProperty";
import countAll from "../../application/use_cases/vendor/countAll";
import findById from "../../application/use_cases/vendor/findById";

export default function vendorController(
  vendorRepository,
  vendorDbRepositoryImpl,
  authServiceInterface,
  authServiceImpl
) {
  const dbRepository = vendorRepository(vendorDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const fetchVendorsByProperty = (req, res, next) => {
    const params = {};
    const response = {};

    // Dynamically created query params based on endpoint params
    for (const key in req.query) {
      if (Object.prototype.hasOwnProperty.call(req.query, key)) {
        params[key] = req.query[key];
      }
    }
    // predefined query params (apart from dynamically) for pagination
    params.page = params.page ? parseInt(params.page, 10) : 1;
    params.perPage = params.perPage ? parseInt(params.perPage, 10) : 10;

    findByProperty(params, dbRepository)
      .then((users) => {
        response.users = users;
        return countAll(params, dbRepository);
      })
      .then((totalItems) => {
        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / params.perPage);
        response.itemsPerPage = params.perPage;
        return res.json(response);
      })
      .catch((error) => next(error));
  };

  const fetchVendorById = (req, res, next) => {
    findById(req.params.id, dbRepository)
      .then((user) => res.json(user))
      .catch((error) => next(error));
  };

  const addNewVendor = (req, res, next) => {
    const { name, email, password, address, phoneNumber, paymentInfo } = req.body;
    addVendor(
      name,
      email,
      password,
      address,
      phoneNumber,
      paymentInfo,
      dbRepository,
      authService
    )
      .then((user) => res.json(user))
      .catch((error) => next(error));
  };

  return {
    fetchVendorsByProperty,
    fetchVendorById,
    addNewVendor
  };
}
