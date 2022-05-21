import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from "../../Assets/styles/cart/cart.module.css"
import { Form, InputText, TextArea } from '../../globalComponents/Form';
import { setModalContentOnStore, setModalOnStore } from '../../Store/actions/modalActions';


function CartTotal({ total }) {
    const reduction = 0;
    const [paiementTypes, setPaiementTypes] = useState(false)
    const dispatch = useDispatch();

    function getTotalToPaid() {
        return total * (1 - (reduction / 100))
    }
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
                {getTotalToPaid()} €
            </p>
            <button onClick={() => setPaiementTypes(true)}>
                Proceder au paiement
            </button>
            {
                paiementTypes && <div className={styles.paiementBtns}>
                    <button className={styles.deliveredPaiement}
                        onClick={() => {
                            dispatch(setModalContentOnStore(<PaieOnDeliveryModal total={getTotalToPaid()} />))
                            dispatch(setModalOnStore(true))
                        }}>Payer a la livraison</button>
                    <button className={styles.paypalPaiement}>Payer par Paypal</button>
                </div>
            }

        </div>
    )
}


const PaieOnDeliveryModal = ({ total }) => {
    const [formValues, setFormValues] = useState({
        username: "", address: "", tel: ""
    })
    const router = useRouter()
    const hostAndProtocol = window.location.protocol + '//' + window.location.host

    async function handleSubmit() {
        try {
            const addOrder = await axios.post(hostAndProtocol + '/api/order', {
                ...formValues, total,
                status: {
                    paiement: false,
                    preparation: false,
                    route: false,
                    livraison: false
                }
            });

            router.push("/order/" + addOrder.data._id)
        } catch (error) {
            console.log(error)
        }
    }
    return (<div>
        <Form props={{ submitFunction: handleSubmit, classname: '' }}>
            <InputText props={{
                name: "username", ph: "Jean Rousseau", label: 'Votre nom',
                formValues, setFormValues,
                required: true, size: "semi"
            }} />

            <InputText props={{
                name: "tel", ph: "+229 00000000", label: 'Votre télephone',
                formValues, setFormValues,
                required: true, size: "semi"
            }} />

            <TextArea props={{
                name: "address", ph: "Cotonou,Place des ....", label: 'Votre adresse',
                formValues, setFormValues,
                required: true, size: "semi"
            }} />

            <div className='formBtn'>
                <button>Lancer la commande</button>
            </div>
        </Form>
    </div>)
}

export default CartTotal
