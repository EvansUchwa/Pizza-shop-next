import styles from "../../Assets/styles/cart/cart.module.css"
import Image from "next/image";
import { UpdateItemQuantityBtns } from '../../globalComponents/other';
import { useDispatch } from "react-redux";
import { removeToCart } from "../../Store/actions/cartActions";
function CartTable({ cart }) {
    const dispatch = useDispatch()
    return (
        <div className={styles.cartTable}>
            <section>
                {
                    cart.map((item, index) => <article
                        key={"cart item nb" + index}
                        className={styles.cartCard}>
                        <div className={styles.cC_left}>
                            <section>
                                <Image src="/img/pizza.png" alt="Image pizza cart"
                                    layout='fill'
                                />
                            </section>
                            <p>{item.name}</p>
                        </div>
                        <div className={styles.cC_right}>
                            <section className={styles.cCR_prices}>
                                <b>{item.price * item.quantity} €</b>
                                <p>{item.price}€ * {item.quantity} </p>
                            </section>
                            <section className={styles.cCR_igs}>
                                {
                                    item.ingrediants.map((ig, ind) => <span key={"cart ig nb" + ind}>
                                        {ig.name}
                                        <i className='mdi mdi-close'></i>
                                    </span>)
                                }
                            </section>
                        </div>
                        <div className={styles.cC_foot}>
                            <UpdateItemQuantityBtns props={{ count: item.quantity, alreadyOnCart: true, item, index }} />
                            <span>
                                <i className='mdi mdi-delete'
                                    onClick={() => dispatch(removeToCart(index))}></i>
                            </span>
                        </div>
                    </article>
                    )
                }
            </section>
        </div>
    )
}

export default CartTable
