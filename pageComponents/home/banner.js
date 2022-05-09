import React from 'react'
import styles from "../../Assets/styles/home/banner.module.css"
import Image from "next/image"
import { useState } from 'react'

function HomeBanner() {
    const [slideIndex, setSlideIndex] = useState(0)
    const bannerImgs = [
        "featured.webp",
        "featured2.webp",
        "featured3.webp",

    ]
    function handleSlideArrow(direction) {
        const slideItems = bannerImgs.length
        if (direction === "l") {
            setSlideIndex(slideIndex != 0 ? (slideIndex - 1) : (slideItems - 1))
        } else {
            setSlideIndex(slideIndex != (slideItems - 1) ? (slideIndex + 1) : 0)
        }
    }

    return (
        <div className={styles.banner}>
            <section className={styles.bannerSliderNav}>
                <i className='mdi mdi-chevron-left'
                    onClick={() => handleSlideArrow('l')}></i>
                <i className='mdi mdi-chevron-right'
                    onClick={() => handleSlideArrow('r')}></i>
            </section>
            <section className={styles.bannerSlider}
                style={{
                    transform: "translateX(" + (-100 * slideIndex) + "vw)"
                }}>
                {
                    bannerImgs.map((img, index) => <div key={"home ban slider nb" + index}
                        className={styles.bs_item}>
                        <Image
                            src={"/img/" + img}
                            alt="Home banner slide item"
                            layout='fill' />
                    </div>)
                }
            </section>
        </div >
    )
}

export default HomeBanner
