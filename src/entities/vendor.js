export default function createVendor(name, email, password, address, phoneNumber, vpaymentInfo) {
    return {
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
      getAddress: () => address,
      getPhoneNumber: () => phoneNumber,
      getPaymentInfo: () => vpaymentInfo
    };
  }
  