import React from 'react'
import Image from 'next/image'
import styles from "../Assets/styles/footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer_img}>
                <Image src="/img/bg.png" layout='fill' />
            </section>
            <section className={styles.footer_text}>
                <article>
                    <p>
                        Chez Pizza-Pedia nous nous engageons à utiliser les meilleurs produits pour garnir vos pizzas.

                        Notre amour pour les bons produits et ma passion du bien manger nous permettent de vous emmener dans un voyage culinaire aux milliers de saveurs.</p>
                </article>
                <article>
                    <h3>Ou nous trouvez ?</h3>
                    <ul>
                        <li>Adrress 1</li>
                        <li>Adrress 2</li>
                        <li>Adrress 3</li>

                    </ul>
                </article>
                <article>
                    <h3>Horraire</h3>
                    <ul>
                        <li>
                            <b>Lundi Au Vendredi</b>
                            <span>12h-20h</span>
                        </li>
                        <li>
                            <b>Samedi Au Dimanche</b>
                            <span>08h-00h</span>
                        </li>

                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer
