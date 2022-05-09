import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderList from '../pageComponents/orders/orderList';
import { cartSelector } from '../Store/selectors/cartSelector';
import styles from '../Assets/styles/orders.module.css'


function Orders() {
    return <div className={styles.orders}>
        <h1>Commandes</h1>
        <OrderList styles={styles} />
    </div>
}



export default Orders;
