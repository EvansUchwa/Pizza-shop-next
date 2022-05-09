import Pizza from "../../../models/pizzas";
import DB_CONNEXION from "../../../utils/db";

export default async function handler(req, res) {
    const { method } = req;


    if (req.method == 'POST') {
        DB_CONNEXION()
        try {
            const newPizza = await Pizza.create(req.body);

            res.status(201).json(newPizza);
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'GET') {

        try {
            const getPizzas = await Pizza.find();
            res.send(getPizzas)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
