export default function order(userId, status, totalAmount, orderItems) {
    return {
      getUserId: () => userId,
      getStatus: () => status,
      getTotalAmount: () => totalAmount,
      getOrderItems: () => orderItems
    };
  }
