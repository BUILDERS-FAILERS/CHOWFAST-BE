export default function user(
  username,
  password,
  email,
  role,
  addresses,
  phoneNumber,
  paymentInfo,
  orders,
  favorites,
  createdAt
) {
  return {
    getUserName: () => username,
    getPassword: () => password,
    getEmail: () => email,
    getRole: () => role,
    getAddresses: () => addresses,
    getPhoneNumber: () => phoneNumber,
    getPaymentInfo: () => paymentInfo,
    getOrders: () => orders,
    getFavorites: () => favorites,
    getCreatedAt: () => createdAt
  };
}
