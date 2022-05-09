import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from "../../Assets/styles/cart/cart.module.css"
import { setModalContentOnStore, setModalOnStore } from '../../Store/actions/modalActions';


function CartTotal({ total }) {
    const reduction = 0;
    const [paiementTypes, setPaiementTypes] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className={styles.cartTotal}>
            <h2>Total du pannier</h2>
            <p>
                <b>Achats</b>
                {total} €
            </p>
            <p>
                <b>Reduction</b>
                {reduction} €
            </p>
            <p>
                <b>Total</b>
                {total * (1 - (reduction / 100))} €
            </p>
            <button onClick={() => setPaiementTypes(true)}>
                Proceder au paiement
            </button>
            {
                paiementTypes && <div className={styles.paiementBtns}>
                    <button className={styles.deliveredPaiement}
                        onClick={() => {
                            dispatch(setModalContentOnStore(<PaieOnDeliveryModal />))
                            dispatch(setModalOnStore(true))
                        }}>Payer a la livraison</button>
                    <button className={styles.paypalPaiement}>Payer par Paypal</button>
                </div>
            }

        </div>
    )
}


const PaieOnDeliveryModal = () => {
    return (<div>
        Le formulaire
    </div>)
}

export default CartTotal
