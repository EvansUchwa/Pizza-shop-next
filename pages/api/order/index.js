import DB_CONNEXION from "../../../utils/db";
import Order from "../../../models/order.js"
export default async function handler(req, res) {
    const { method } = req;


    if (method == 'POST') {
        DB_CONNEXION()
        try {
            const newOrder = await Order.create(req.body);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'GET') {

        try {
            const getOrders = await Order.find();
            res.send(getOrders)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
