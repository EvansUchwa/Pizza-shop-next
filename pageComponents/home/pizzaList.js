import React from 'react'
import styles from "../../Assets/styles/home/pizzaList.module.css"
import Image from "next/image"
import Link from 'next/link'

function PizzaList({ pizzaList }) {
    return (
        <div className={styles.pizzaList}>
            <h1>
                Lorem Ipsum
            </h1>
            <p>

                Neque porro quisquam est qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit...
            </p>
            <section className={styles.plPizzas}>
                {
                    pizzaList.map((pz, index) => <article key={"pizza l pz nb" + index}
                        className={styles.pizzaCard}>
                        <Link href={"/pizza/" + pz._id} passHref>
                            <Image src="/img/pizza.png" alt="la pizza de la mama"
                                width="100px" height="100px" />
                        </Link>
                        <b>{pz.name}</b>
                        <span>{pz.price[0]} €</span>
                        <p>
                            {pz.description}
                        </p>
                    </article>)
                }
            </section>
        </div>
    )
}

export default PizzaList
