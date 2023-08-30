export default function vendorRepository(repository) {
  const findByProperty = (params) => repository.findByProperty(params);
  const countAll = (params) => repository.countAll(params);
  const findById = (id) => repository.findById(id);
  const add = (vendor) => repository.add(vendor);
  const deleteById = (id) => repository.deleteById(id);

  return {
    findByProperty,
    countAll,
    findById,
    add,
    deleteById
  };
}
