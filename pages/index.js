import axios from 'axios'
import Head from 'next/head'
import HomeBanner from '../pageComponents/home/banner'
import PizzaList from '../pageComponents/home/pizzaList'

export default function Home({ pizzaList }) {
  return (
    <div >
      <Head>
        <title>Pizza Yollo</title>
        <meta name="description" content="Un site de commande de pizza Hahah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <HomeBanner />
        <PizzaList pizzaList={pizzaList} />
      </main>

    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await axios('http://localhost:3000//api/pizza');
  return {
    props: {
      pizzaList: res.data
    }
  }
}