export default function orderItem(menuItemId, vendorId, price, quantity) {
    return {
        getMenuItemId: () => menuItemId,
        getVendorId: () => vendorId,
        getPrice: () =>price,
        getQuantity: () => quantity
    }
}
