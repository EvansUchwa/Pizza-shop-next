import Product from "../../../models/product";
import DB_CONNEXION from "../../../utils/db";

export default async function handler(req, res) {
    const { method } = req;


    if (req.method == 'POST') {
        DB_CONNEXION()
        try {
            const newPizza = await Product.create(req.body);

            res.status(201).json(newPizza);
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'GET') {

        try {
            const getPizzas = await Product.find();
            res.send(getPizzas)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
