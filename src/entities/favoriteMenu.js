export default function favoriteMenu(userId, menuId){
    return {
        getUserId: () => userId,
        getMenuId: () => menuId
    }
}
