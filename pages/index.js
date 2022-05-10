import axios from 'axios'
import Head from 'next/head'
import HomeBanner from '../pageComponents/home/banner'
import PizzaList from '../pageComponents/home/pizzaList'
import { checkWindow, getWindowHost } from '../utils/window'

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


export const getServerSideProps = async (context) => {
  const { req } = context;
  const host = req.headers.host
  const protocol = req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https://" : "http://";
  // console.log(protocol + '__' + )
  const res = await axios(protocol + host + '/api/pizza');
  return {
    props: {
      pizzaList: res.data
    }
  }
}