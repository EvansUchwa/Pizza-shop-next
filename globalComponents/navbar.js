import React, { useEffect, useState } from 'react'
import styles from "../Assets/styles/navbar.module.css"
import Image from "next/image"
import { useSelector } from 'react-redux'
import { cartSelector } from '../Store/selectors/cartSelector'
import Link from 'next/link'
function Navbar() {
  const cart = useSelector(cartSelector)
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => setCartLength(cart.length), [cart])
  return (
    <nav className={styles.nav}>
      <section className={styles.left}>
        <div className={styles.left_img}>
          <Image src="/img/telephone.png" alt="nous contactez bouton"
            width={32} height={32} />
        </div>
        <div className={styles.left_text}>
          <p>Commander mtn</p>
          <b>+229 0600000</b>
        </div>
      </section>

      <section className={styles.center}>
        <Image src="/img/logo.png" alt="nous contactez bouton"
          width={150} height={75} />
      </section>


      <Link href="/cart" passHref>
        <section className={styles.right}>
          <i className='mdi mdi-cart'></i>
          <span> {cartLength} </span>
        </section>
      </Link>

    </nav>
  )
}

// export const getServerSideProps = (context) => {
//   if (context.req.cookies.token)
//     return {
//       props: {
//         isAuth: true
//       }
//     }
// }
export default Navbar
