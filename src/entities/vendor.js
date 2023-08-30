export default function createVendor(name, email, password, address, phoneNumber, paymentInfo) {
    return {
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
      getAddress: () => address,
      getPhoneNumber: () => phoneNumber,
      getPaymentInfo: () => paymentInfo
    };
  }
  