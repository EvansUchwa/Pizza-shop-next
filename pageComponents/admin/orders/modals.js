import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { ConfirmationMessage } from "../../../globalComponents/Modal"
import { getClientProtocolAndHost } from "../../../utils/request"


export const OrderDetailModal = ({ props }) => {
    const { order, styles } = props
    return <div className={styles.detailModal}>
        <p>
            <b>Identifiant de la commande</b>
            <span>{order._id}</span>
        </p>
        <p>
            <b>Nom du client</b>
            <span>{order.username}</span>
        </p>
        <p>
            <b>Adresse du client</b>
            <span>{order.address}</span>
        </p>
        <p>
            <b>Telephone du client</b>
            <span>{order.tel}</span>
        </p>
        <p>
            <b>Total de la commande</b>
            <span>{order.total} €</span>
        </p>
        {/* <p>
            <b>Date d'ajout</b>
            <span>
                {moment(product.createdAt).format("DD-MM-YYYY")}
            </span>
        </p> */}
    </div>
}

export const UpdateOrderModal = ({ props }) => {
    const { router, orderId, orderStatus } = props;

    function getNextStepAndNewStatus(orderStatus) {
        let oneStatusIsTrue = false;
        for (const key in orderStatus) {
            if (orderStatus[key] === true) {
                oneStatusIsTrue = key
            }
        }
        let newStatus = '';
        let nextStep = '';
        if (oneStatusIsTrue) {
            const keys = Object.keys(orderStatus)
            const nextIndex = keys.indexOf(oneStatusIsTrue) + 1;
            if (!keys[nextIndex]) {
                newStatus = { ...orderStatus, paiement: true }
                nextStep = "''paiement''"
            } else {
                newStatus = { ...orderStatus, [keys[nextIndex]]: true }
                nextStep = "''" + keys[nextIndex] + "''"
            }

        } else {
            newStatus = { ...orderStatus, preparation: true }
            nextStep = "''preparation''"
        }

        return { newStatus, nextStep };
    }

    async function handleUpdate(id) {
        // console.log(newStatus)
        const newStatus = '';
        const updatePizza = await axios.put(getClientProtocolAndHost() + '/api/order/' + id,
            getNextStepAndNewStatus(orderStatus).newStatus)
        updatePizza.data._id && router.replace(router.asPath)
    }
    return <ConfirmationMessage props={{
        text: <>
            Voulez vous vraiment mettre le statut de cette commande a <br />
            {getNextStepAndNewStatus(orderStatus).nextStep + " -> effectué"}  ?
        </>,
        functionAfterConfirm: handleUpdate, param: orderId
    }} />
}

export const DeleteOrderModal = ({ props }) => {
    const { router, orderId } = props;

    async function handleDelete(id) {
        const deletePizza = await axios.delete(getClientProtocolAndHost() + '/api/order/' + id)
        deletePizza.data._id && router.replace(router.asPath)
    }
    return <ConfirmationMessage props={{
        text: "Voulez vous vraiment supprimez cette commande ?",
        functionAfterConfirm: handleDelete, param: orderId
    }} />
}