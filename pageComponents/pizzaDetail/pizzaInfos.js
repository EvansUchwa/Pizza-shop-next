import React from 'react'
import Image from "next/image";
import styles from "../../Assets/styles/pizzaDetails.module.css"
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/actions/cartActions';
import { UpdateItemQuantityBtns } from '../../globalComponents/other';
import { useRouter } from 'next/router';


function PizzaInfos({ pizzaDetails, pizzaIngrediants }) {
    const pizzaSizes = {
        petite: "50px",
        moyenne: "70px",
        grande: "90px"
    };
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [ingrediants, setIngrediants] = useState([]);
    const [count, setCount] = useState(0);
    const router = useRouter()
    const dispatch = useDispatch();

    function getPrice() {
        if (ingrediants.length === 0) {
            return pizzaDetails.price[selectedPrice];
        } else {
            let finalPrice = pizzaDetails.price[selectedPrice]
            for (let i = 0; i < ingrediants.length; i++) {
                finalPrice = finalPrice + ingrediants[i].price;
            }
            return finalPrice;
        }
    }

    function handleIngrediant(event, ig) {
        const checked = event.target.checked;
        if (checked) {
            setIngrediants((prev) => [...ingrediants, ig])
        } else {
            const copyIngrediants = [...ingrediants];
            const filterIg = copyIngrediants.filter(item => item.name !== ig.name);
            setIngrediants(filterIg)
        }

    }

    function handleSize(id) {
        setSelectedSize(id)
        setSelectedPrice(id)
    }

    function handleAddToCart() {
        const newCartItem = {
            id: pizzaDetails._id,
            name: pizzaDetails.name,
            img: pizzaDetails.img,
            price: getPrice(),
            type: pizzaDetails.type,
            ingrediants,
            quantity: count
        }
        dispatch(addToCart(newCartItem))
        router.push('/cart')
    }


    return (
        <div className={styles.pizzaDetails}>
            <section className={styles.pd_Pic}>
                <Image alt="La photo de la pizza"
                    src={pizzaDetails.img}
                    layout="fill" />
            </section>
            <section className={styles.pd_Text}>
                <h1>{pizzaDetails.name}</h1>

                <h2>{getPrice()} €</h2>

                <p>
                    {pizzaDetails.description}
                </p>

                <article className={styles.pdt_sizes}>
                    <h3>Choisir la taille</h3>
                    <div>
                        {
                            pizzaDetails.types.map((sz, ind) => <div
                                style={{
                                    width: pizzaSizes[sz],
                                    height: pizzaSizes[sz]
                                }}
                                key={"size nb" + ind}
                                onClick={() => handleSize(ind)}>
                                <b className={selectedSize === ind
                                    ? styles.sizeSelected : ""}>
                                    {sz}</b>
                                <Image alt={"Taille " + sz.text + " de la pizza"}
                                    src="/img/size.png"
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>)
                        }
                    </div>

                </article>

                <article className={styles.pdt_ingrediants}>
                    <h3>Choisir autres ingrédiants</h3>
                    <div>
                        {
                            pizzaIngrediants.map((ig, ind) => <section
                                key={"ing nb" + ind}>
                                <input type={"checkbox"}
                                    name="ingrediants"
                                    id={'lab-ig-' + ind}
                                    value={ig}
                                    onChange={(event) => handleIngrediant(event, ig)} />
                                <label htmlFor={'lab-ig-' + ind}>
                                    {ig.name} ({ig.price} €)
                                </label>
                            </section>)
                        }
                    </div>
                </article>

                <div className={styles.pdt_addToCart}>
                    <UpdateItemQuantityBtns props={{ count, setCount }} />
                    {
                        count > 0 && <button onClick={() => handleAddToCart()}>Ajouter au panier</button>
                    }
                </div>
            </section>
        </div>
    )
}

export default PizzaInfos;
