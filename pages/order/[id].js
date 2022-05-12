import React from 'react'
import Image from 'next/image'
import styles from "../../Assets/styles/order.module.css"
import axios from 'axios'
import { RessourcesNotFound } from '../../globalComponents/other'
function OrderList({ order }) {
    const statusTypes1 = [
        { text: "Paiement", img: "paid.png", icon: "mdi-cash-check", key: "paiement" },
        { text: "Preparation", img: "bake.png", icon: "mdi-chef-hat", key: "preparation" },
        { text: "En route", img: "bike.png", icon: "mdi-truck-fast", key: "route" },
        { text: "Livré", img: "delivered.png", icon: "mdi-truck-check", key: "livraison" },
    ]
    const statusTypes2 = [
        { text: "Preparation", img: "bake.png", icon: "mdi-chef-hat", key: "preparation" },
        { text: "En route", img: "bike.png", icon: "mdi-truck-fast", key: "route" },
        { text: "Livré", img: "delivered.png", icon: "mdi-truck-check", key: "livraison" },
        { text: "Paiement", img: "paid.png", icon: "mdi-cash-check", key: "paiement" }
    ]

    function dispatchOrderEvent(orderStatus) {
        if (orderStatus.paiement) {
            return statusTypes1;
        } else {
            return statusTypes2;
        }
    }
    return (<div className={styles.orders}>
        <div className={styles.ordersList}>

            {
                order && order._id ? <section key={"order nb "}
                    className={styles.orderItem}>
                    <article className={styles.oi_infos}>
                        <p>
                            <b>N* commande</b>
                            <span>{order._id}</span>
                        </p>

                        <p>
                            <b>Cient</b>
                            <span>{order.username}</span>
                        </p>

                        <p>
                            <b>Adresse</b>
                            <span>{order.address}</span>
                        </p>

                        <p>
                            <b>Total</b>
                            <span>{order.total} €</span>
                        </p>
                    </article>

                    <article className={styles.oi_status}>
                        {
                            dispatchOrderEvent(order.status).map((st, index) => <p key={"order status nb" + index}>
                                <Image src={"/img/" + st.img} width="50vh" height="50vh"
                                    alt={"order event " + index} />
                                <b>{st.text}</b>
                                <i className={'mdi mdi-check-decagram ' + (order.status[st.key] && styles.currentStatus)}></i>
                            </p>)
                        }

                    </article>
                </section> : <RessourcesNotFound />
            }

        </div>
    </div>
    )
}


export const getServerSideProps = async ({ req, params }) => {
    const { id } = params;
    const host = req.headers.host
    const protocol = req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https://" : "http://";
    let resOrder = null;
    try {
        resOrder = await axios(protocol + host + '/api/order/' + id);
        resOrder = resOrder.data;
    } catch (error) {

    }


    return {
        props: {
            order: resOrder
        }
    }
}

export default OrderList
