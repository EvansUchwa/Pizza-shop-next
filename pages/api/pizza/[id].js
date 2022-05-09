import Pizza from "../../../models/pizzas";
import DB_CONNEXION from "../../../utils/db";

export default async function handler(req, res) {
    const { method, query } = req;
    const { id } = query;
    if (method == 'GET') {
        // res.send(query)
        try {
            const getPizza = await Pizza.findById(id);
            res.send(getPizza)
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'PUT') {

    } else if (method == 'DELETE') {

    }
}
