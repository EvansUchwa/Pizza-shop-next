import React from 'react'
import PizzaInfos from '../../pageComponents/pizzaDetail/pizzaInfos'
import axios from 'axios'
import { RessourcesNotFound } from '../../globalComponents/other'
function PizzaDetail({ pizzaDetails, pizzaIngrediants }) {
    return (
        <div>
            {
                pizzaDetails && pizzaDetails._id ?
                    <PizzaInfos pizzaDetails={pizzaDetails}
                        pizzaIngrediants={pizzaIngrediants} />
                    : <RessourcesNotFound />
            }
        </div>
    )
}

export const getServerSideProps = async ({ req, params }) => {
    const host = req.headers.host
    const protocol = req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https://" : "http://";
    try {
        const resPizza = await axios(protocol + host + '/api/product/' + params.id);
        const resIngrediants = await axios(protocol + host + '/api/ingrediant');
        return {
            props: {
                pizzaDetails: resPizza.data,
                pizzaIngrediants: resIngrediants.data
            }
        }
    } catch (error) {
        return {
            props: {
                pizzaDetails: null,
            }
        }
    }

}
export default PizzaDetail
