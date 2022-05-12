import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../Assets/styles/otherUI.module.css"


function FourOhFour() {
    return (
        <div className={styles.ressourcesNotFound}>
            <Image src="/img/404.svg" width="300px" height="300px" alt='Page 404' />
            <Link href="/">{"Revenir a l'accueil"}</Link>
        </div>
    )
}

export default FourOhFour;
