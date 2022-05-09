import Ingrediant from "../../../models/ingrediant";
import DB_CONNEXION from "../../../utils/db";

export default async function handler(req, res) {
    const { method } = req;

    DB_CONNEXION()
    if (req.method == 'POST') {

        try {
            const newIngrediant = await Ingrediant.create(req.body);
            res.status(201).json(newIngrediant);
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'GET') {

        try {
            const ingrediants = await Ingrediant.find();
            res.send(ingrediants)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
