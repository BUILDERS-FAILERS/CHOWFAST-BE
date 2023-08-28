export default function menuItem(name, description, price, vendorId) {
    return {
      getName: () => name,
      getDescription: () => description,
      getPrice: () => price,
      getVendorId: () => vendorId
    };
  }
  