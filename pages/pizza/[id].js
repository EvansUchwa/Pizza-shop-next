import React from 'react'
import PizzaInfos from '../../pageComponents/pizzaDetail/pizzaInfos'
import axios from 'axios'
function PizzaDetail({ pizzaDetails, pizzaIngrediants }) {
    return (
        <div>
            <PizzaInfos pizzaDetails={pizzaDetails}
                pizzaIngrediants={pizzaIngrediants} />
        </div>
    )
}

export const getServerSideProps = async ({ req, params }) => {
    const host = req.headers.host
    const protocol = req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https://" : "http://";
    const resPizza = await axios(protocol + host + '/api/pizza/' + params.id);
    const resIngrediants = await axios(protocol + host + '/api/ingrediant');
    return {
        props: {
            pizzaDetails: resPizza.data,
            pizzaIngrediants: resIngrediants.data
        }
    }
}
export default PizzaDetail
