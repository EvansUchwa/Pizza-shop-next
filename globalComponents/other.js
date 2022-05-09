import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from "../Assets/styles/otherUI.module.css"
import { upQuantityToCart } from '../Store/actions/cartActions';


export function UpdateItemQuantityBtns({ props }) {
    const { count, setCount,
        alreadyOnCart, item, index } = props;
    const dispatch = useDispatch()

    function handleAddOrUpdate(type) {
        if (alreadyOnCart) {

        } else {
            type === '+' ? setCount(count + 1) : setCount(count > 0 ? count - 1 : 0)
        }
    }
    return (
        <div className={styles.updateItemQuantityBtns}>
            <span onClick={() => {
                if (alreadyOnCart) {
                    dispatch(upQuantityToCart('-', item, index))
                } else {
                    handleAddOrUpdate('-')
                }
            }}>-</span>
            <b>{count} </b>
            <span onClick={() => {
                if (alreadyOnCart) {
                    dispatch(upQuantityToCart('+', item, index))
                } else {
                    handleAddOrUpdate('+')
                }
            }}>+</span>
        </div>
    )
}

// onClick={() => dispatch(addToCart(pizzaDetails))}