import React from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { setModalContentOnStore, setModalOnStore } from '../../../Store/actions/modalActions';
import { DeleteOrderModal, OrderDetailModal, UpdateOrderModal } from '../orders/modals';

function OrderManager({ styles, orders }) {
    const dispatch = useDispatch();
    const router = useRouter()

    function checkPaiementType(order) {
        if (order.status.paiement) {
            return 'Paiement Effectué'
        } else {
            return 'Paiement a la livraison'
        }
    }

    function checkOrderHasFinish(order) {
        if (order.status.paiement && order.status.preparation && order.status.route && order.status.livraison) {
            return true
        }
        return false;
    }
    function viewOrderActionModal(action = null, order = null,) {
        let comp = null;
        if (action == "read") {
            comp = <OrderDetailModal props={{ styles, order }} />;
        } else if (action == "update") {
            comp = <UpdateOrderModal props={{ styles, orderId: order._id, orderStatus: order.status, router }} />;
        } else if (action == "delete") {
            comp = <DeleteOrderModal props={{ styles, orderId: order._id, router }} />;
        }
        dispatch(setModalContentOnStore(comp))
        dispatch(setModalOnStore(true))
    }
    return (
        <div>
            {
                orders.length > 0 ?
                    <table className={styles.dashTable}>
                        <thead>
                            <tr>
                                <th>N*</th>
                                <th>Client</th>
                                <th>Paiement</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr
                                    key={"product nb " + index}>
                                    <td>{index + 1} </td>
                                    <td>{order.username}</td>
                                    <td>{checkPaiementType(order)} </td>
                                    <td>
                                        <i className='mdi mdi-eye'
                                            onClick={() => viewOrderActionModal("read", order)}></i>
                                        {
                                            !checkOrderHasFinish(order) && <span onClick={() => viewOrderActionModal("update", order)}>
                                                Etape Suivante
                                                <i className='mdi mdi-chevron-right'></i>
                                            </span>
                                        }

                                        <i className='mdi mdi-delete'
                                            onClick={() => viewOrderActionModal("delete", order)}></i>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table> : <p>Aucune commandes repertoriés</p>
            }
        </div>
    )
}

export default OrderManager
