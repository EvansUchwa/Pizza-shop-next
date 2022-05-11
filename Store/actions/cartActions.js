export function addToCart(item) {
    return {
        type: "SET_CART_ITEM",
        payload: item
    }
}


export function upQuantityToCart(typeUpdate, item, itemIndex) {
    if (typeUpdate == "+") {
        return {
            type: "UP_ITEM_QUANTITY_TO_CART",
            payload: {
                itemIndex,
                itemUpdated: { ...item, quantity: item.quantity + 1 }
            }
        }
    } else {
        return {
            type: "UP_ITEM_QUANTITY_TO_CART",
            payload: {
                itemIndex,
                itemUpdated: { ...item, quantity: item.quantity - 1 }
            }
        }
    }
}

export function removeToCart(index) {
    return {
        type: "REMOVE_CART_ITEM",
        payload: index
    }
}