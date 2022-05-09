import React from 'react'
import Image from 'next/image'
function OrderList({ styles }) {
    const statusTypes = [
        { text: "Paiement", img: "paid.png", icon: "mdi-cash-check", key: "paiement" },
        { text: "Preparation", img: "bake.png", icon: "mdi-chef-hat", key: "preparation" },
        { text: "En route", img: "bike.png", icon: "mdi-truck-fast", key: "route" },
        { text: "Livré", img: "delivered.png", icon: "mdi-truck-check", key: "livraison" },

    ]

    const orders = [
        { status: { paiement: true, preparation: false, route: false, livraison: false } },
        { status: { paiement: true, preparation: true, route: false, livraison: false } },
        { status: { paiement: true, preparation: true, route: true, livraison: false } },

    ]
    return (
        <div className={styles.ordersList}>
            {
                orders.map((order, ind) => <section key={"order nb " + ind}
                    className={styles.orderItem}>
                    <article className={styles.oi_infos}>
                        <p>
                            <b>Titre 1</b>
                            <span>L34d43jsR4534d454-s564Rd</span>
                        </p>

                        <p>
                            <b>Titre 1</b>
                            <span>Nom Prenom</span>
                        </p>

                        <p>
                            <b>Adresse</b>
                            <span>Cotonou,Gbegamey 03 BP</span>
                        </p>

                        <p>
                            <b>Total</b>
                            <span>100 €</span>
                        </p>
                    </article>

                    <article className={styles.oi_status}>
                        {
                            statusTypes.map((st, index) => <p key={"order status nb" + index}>
                                <Image src={"/img/" + st.img} width="50vh" height="50vh" />
                                <b>{st.text}</b>
                                <i className={'mdi mdi-check-decagram ' + (order.status[st.key] && styles.currentStatus)}></i>
                            </p>)
                        }

                    </article>
                </section>)
            }
        </div>
    )
}

export default OrderList
