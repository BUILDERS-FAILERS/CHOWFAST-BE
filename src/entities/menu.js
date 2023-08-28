export default function createMenu(name, description, menuItems, categories) {
    return {
      getName: () => name,
      getDescription: () => description,
      getMenuItems: () => menuItems,
      getCategories: () => categories
    };
  }
  