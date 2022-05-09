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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aut fugiat ratione culpa, deserunt odit quidem eius sint facilis delectus beatae harum ullam officia reiciendis
                        aperiam minima magni consequatur provident praesentium!</p>
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
