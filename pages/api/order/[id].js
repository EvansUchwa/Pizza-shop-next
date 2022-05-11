import Order from "../../../models/order";

export default async function handler(req, res) {
    const { method, query } = req;
    const { id } = query;
    if (method == 'GET') {
        // res.send(query)
        try {
            const getOrder = await Order.findById(id);
            res.send(getOrder)
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'PUT') {
        try {
            const updateOrder = await Order.findByIdAndUpdate(id, { status: req.body });
            res.send(updateOrder)
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'DELETE') {
        try {
            const deleteOrder = await Order.findByIdAndDelete(id);
            res.send(deleteOrder)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
