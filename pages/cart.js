import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartTable from '../pageComponents/cart.js/cartTable';
import CartTotal from '../pageComponents/cart.js/cartTotal';
import { cartSelector } from '../Store/selectors/cartSelector';



function Cart() {
    const cartOnStore = useSelector(cartSelector)
    const [cart, setCart] = useState([]);

    useEffect(() => setCart(cartOnStore), [cartOnStore])

    function getTotal() {
        let total = 0;
        cart.forEach(item => {
            total = total + (item.price * item.quantity)
        });
        return total;
    }
    return (
        <div className="cart">
            <h1> Votre pannier</h1>
            {
                cart && cart.length > 0 ? <>
                    <CartTable cart={cart} />
                    <CartTotal total={getTotal()} />
                </> : <p>Pas de produit dans le pannier</p>
            }
        </div>
    )
}



export default Cart;
