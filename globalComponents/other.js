import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from "../Assets/styles/otherUI.module.css"
import { upQuantityToCart } from '../Store/actions/cartActions';
import Image from "next/image"
import Link from "next/link"


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
            }}>
                <i className='mdi mdi-minus'></i>
            </span>
            <b>{count} </b>
            <span onClick={() => {
                if (alreadyOnCart) {
                    dispatch(upQuantityToCart('+', item, index))
                } else {
                    handleAddOrUpdate('+')
                }
            }}>
                <i className='mdi mdi-plus'></i>
            </span>
        </div>
    )
}

export const RessourcesNotFound = () => {
    return <div className={styles.ressourcesNotFound}>
        <Image src="/img/notFound.svg" alt="Ressource not found" width="300px" height="300px" />
        <h1>Désolé :(,ressources non disponible</h1>
        <Link href="">Revenir a l'accueil</Link>
    </div>
}