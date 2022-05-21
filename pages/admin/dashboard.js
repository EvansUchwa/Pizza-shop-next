import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router';
import styles from "../../Assets/styles/admin/dashboard.module.css"
import OrderManager from '../../pageComponents/admin/orders/orderManager'
import ProductManager from '../../pageComponents/admin/products/productManager'
import { getClientProtocolAndHost, getProtocolAndHost } from '../../utils/request'


function Dashboard({ products, orders, isAuth }) {
    const [navType, setNavType] = useState("produits")
    const router = useRouter();
    const dashMenus = [
        { label: "Produits", value: "produits", id: "dm_1" },
        { label: "Commandes", value: "commandes", id: "dm_2" },

    ]

    function dispatchDashNavResult() {
        if (navType == "produits") {
            return <ProductManager styles={styles}
                products={products} />
        } else if (navType == "commandes") {
            return <OrderManager styles={styles}
                orders={orders} />
        }
    }

    async function logout() {
        const req = await axios.delete(getClientProtocolAndHost() + "/api/auth/logout")
        if (req.data.isDisconnected) {
            router.push('/admin/login')
        }
    }
    return (
        <div className={styles.dashboard}>
            {isAuth && <button className={styles.floatedDashBtn}
                onClick={() => logout()}>Se deconnecter</button>}
            <h1>Bonjour Admin ....</h1>

            <section className={styles.d_menuAndResult}>
                <div className={styles.d_menus}>
                    {
                        dashMenus.map((menu, index) => <label
                            key={"dash menu nb" + index}
                            htmlFor={menu.id}>
                            <input type="radio"
                                id={menu.id}
                                name="dash_menu"
                                defaultChecked={navType === menu.value}
                                onChange={() => setNavType(menu.value)} />
                            <span>
                                {menu.label}
                            </span>
                        </label>)
                    }

                </div>
                <div className={styles.d_results}>
                    {
                        dispatchDashNavResult()
                    }
                </div>

            </section>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const { req } = context;
    let products = []
    let orders = []

    try {
        const produitsReq = await axios.get(getProtocolAndHost(req)
            + '/api/product');
        const ordersReq = await axios.get(getProtocolAndHost(req)
            + '/api/order');
        products = produitsReq.data,
            orders = ordersReq.data
    } catch (error) {
        console.log(error)
    }

    if (req.cookies.token !== process.env.adminToken) {
        return {
            redirect: {
                destination: "/admin/login"
            }
        }
    }
    return {
        props: {
            products,
            orders,
            isAuth: true
        }
    }

}
export default Dashboard
