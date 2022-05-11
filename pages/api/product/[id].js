import Product from "../../../models/product";
import DB_CONNEXION from "../../../utils/db";

export default async function handler(req, res) {
    const { method, query } = req;
    const { id } = query;
    if (method == 'GET') {
        try {
            const getProduct = await Product.findById(id);
            res.send(getProduct)
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'PUT') {
        try {
            const updateProduct = await Product.findByIdAndUpdate(id, req.body);
            res.send(updateProduct)
        } catch (error) {
            res.status(401).send(error)
        }
    } else if (method == 'DELETE') {
        try {
            const deleteProduct = await Product.findByIdAndDelete(id);
            res.send(deleteProduct)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}
