import vendor from "../../../src/entities/vendor";

const Joi = require("joi");

export default function addVendor(
  name,
  email,
  password,
  address,
  phoneNumber,
  paymentInfo,
  vendorRepository,
  authService
) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    adress: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    paymentInfo: Joi.string()
  });

  const validation = schema.validate({
    name,
    email,
    password,
    address,
    phoneNumber,
    paymentInfo
  });

  if (validation.error) {
    throw new Error(validation.error.details[0].message);
  }

  const newVendor = vendor(
    name,
    email,
    authService.encryptPassword(password),
    address,
    phoneNumber,
    paymentInfo
  );

  return vendorRepository
    .findByProperty({ name })
    .then((vendorWithName) => {
      if (vendorWithName.length) {
        throw new Error(`Vendor With Name: ${name} already exists`);
      }
      return vendorRepository.findByProperty({ email });
    })
    .then((vendorWithEmail) => {
      if (vendorWithEmail.length) {
        throw new Error(`Vendor with email: ${email} already exists`);
      }
      return vendorRepository.findByProperty({ phoneNumber });
    })
    .then((vendorWithPhoneNumber) => {
      if (vendorWithPhoneNumber) {
        throw new Error(
          `Phone number: ${phoneNumber} has been registered with an account `
        );
      }
      return vendorRepository.add(newVendor);
    });
}
