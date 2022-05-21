import React from 'react'
import styles from "../../Assets/styles/home/pizzaList.module.css"
import Image from "next/image"
import Link from 'next/link'

function PizzaList({ pizzaList }) {
    return (
        <div className={styles.pizzaList}>
            <h1>
                PIZZA-SHOP COMMENCE
                LÀ OÙ LES AUTRES
                PIZZERIAS S’ARRÊTENT
            </h1>
            <p>
                Nous nous engageons à utiliser les meilleurs produits pour garnir vos pizzas.
            </p>
            <section className={styles.plPizzas}>
                {
                    pizzaList.map((product, index) => <article key={"pizza l pz nb" + index}
                        className={styles.pizzaCard}>
                        <a href={"/product/" + product._id} passHref>
                            <Image src={product.img} alt="la pizza de la mama"
                                layout='fill' />
                        </a>
                        <b>{product.name}</b>
                        <span>{product.sizesAndPrices[0].price} €</span>
                        <p>
                            {product.description}
                        </p>
                    </article>)
                }
            </section>
        </div>
    )
}

export default PizzaList
