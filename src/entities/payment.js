export default function payment(orderId, status, amount, date) {
    return {
        getOrderId: () => orderId,
        getStatus: () => status,
        getAmount: () => amount,
        getDate: () => date
    }
}
