export default function deliveryInfo(orderId, fee, status, estimatedTime, delivererDetails) {
    return {
        getOrder: () => orderId,
        getFee: () => fee,
        getStatus: () => status,
        getEstimatedTime: () => estimatedTime,
        getDelivererDetails: () => delivererDetails
    }
}
