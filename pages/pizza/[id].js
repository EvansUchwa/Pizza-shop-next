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

export const getServerSideProps = async ({ params }) => {
    const resPizza = await axios('http://localhost:3000/api/pizza/' + params.id);
    const resIngrediants = await axios('http://localhost:3000/api/ingrediant');
    return {
        props: {
            pizzaDetails: resPizza.data,
            pizzaIngrediants: resIngrediants.data
        }
    }
}
export default PizzaDetail
