import menuItem from "../../../src/entities/menuItem";

const Joi = require("joi");

export default function addMenuItem(name, description, price, vendorId, menuItemRepository) {
  // only vendor should be able to perform this action

  const schema = Joi.object({
    name: Joi.string().required().min(3),
    description: Joi.string().min(3).required(),
    price: Joi.number().precision(2).required(),
    vendorId: Joi.string().required()
  });

  const validation = schema.validate({
    name,
    description,
    price,
    vendorId
  });

  if (validation.error) {
    throw new Error(validation.error.details[0].message);
  }

  const newMenuItem = menuItem(name, description, price, vendorId);

  return menuItemRepository.add(newMenuItem);
}
