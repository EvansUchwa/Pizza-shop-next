
let defaultCartValue = [];

if (typeof window !== 'undefined' && localStorage.getItem('pizza-app-cart')) {
    defaultCartValue = JSON.parse(localStorage.getItem('pizza-app-cart'))
}


const cartReducer = (state = defaultCartValue, action) => {
    switch (action.type) {
        case 'SET_CART_ITEM': {
            const copyCart = [...state]
            copyCart.push(action.payload)
            localStorage.setItem('pizza-app-cart', JSON.stringify(copyCart))
            return copyCart;
        }


        case 'REMOVE_CART_ITEM': {
            const copyCart = [...state];
            const filtered = copyCart.filter(item => item.id != action.payload);
            localStorage.setItem('pizza-app-cart', JSON.stringify(filtered))
            return filtered;
        }


        case 'UP_ITEM_QUANTITY_TO_CART': {
            const copyCart = [...state];
            copyCart[action.payload.itemIndex] = action.payload.itemUpdated;
            localStorage.setItem('pizza-app-cart', JSON.stringify(copyCart))
            return copyCart;
        }


        default:
            return state;
    }
}


export default cartReducer;