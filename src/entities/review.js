export default function review(userId, menuId, rating, text, date) {
    return {
        getUserId: () => userId,
        getMenuId: () => menuId,
        getRating: () => rating,
        getText: () => text,
        getDate: () => date
    }
}
