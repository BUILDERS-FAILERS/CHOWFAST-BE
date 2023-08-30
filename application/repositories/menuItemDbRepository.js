export default function menuItemRepository(repository) {
  const findByProperty = (params) => repository.findByProperty(params);
  const findById = (id) => repository.findById(id);
  const add = (menuItem) => repository.add(menuItem);
  const deleteById = (id) => repository.deleteById(id);

  return {
    findByProperty,
    findById,
    add,
    deleteById
  };
}
