import VendorModel from "../models/vendor";

function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach((prop) => delete result[prop]);
  return result;
}

export default function vendorDbRepositoryMongoDB() {
  const findByProperty = (params) =>
    VendorModel.find(omit(params, "page", "perPage"))
      .skip(params.perPage * params.page - params.perPage)
      .limit(params.perPage);

  const countAll = (params) =>
    VendorModel.countDocuments(omit(params, "page", "perPage"));

  const findById = (id) => VendorModel.findById(id).select("-password");

  const add = (vendorEntity) => {
    const newVendor = new VendorModel({
      name: vendorEntity.getName(),
      email: vendorEntity.getEmail(),
      password: vendorEntity.getPassword(),
      address: vendorEntity.getAddress(),
      phoneNumber: vendorEntity.getPhoneNumber(),
      paymentInfo: vendorEntity.getPaymentInfo()
    });

    return newVendor.save()
  };

  return {
    findByProperty,
    countAll,
    findById,
    add
  }
}
