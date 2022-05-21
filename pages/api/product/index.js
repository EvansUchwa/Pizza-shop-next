import Product from "../../../models/product";
import DB_CONNEXION from "../../../utils/db";
import multer from "multer";
import { getProtocolAndHost } from "../../../utils/request";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/') // where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // using the file's original name
    }
})
const upload = multer({ storage: storage })

export const config = {
    api: { bodyParser: false }
}


export default async function handler(req, res) {
    const { method } = req;


    if (req.method == 'POST') {
        DB_CONNEXION()

        try {
            upload.single('img')(req, res, async () => {
                if (req.file || req.files) {
                    const filePath = "/uploads/" + req.file.filename;
                    const pizzaData = JSON.parse(req.body.data)
                    const newPizza = await Product.create({ ...pizzaData, img: filePath });
                    // console.log(req.body.sizesAndPrices)
                    res.status(201).json(newPizza);
                    // res.send(req.body.sizesAndPrices)
                } else {
                    res.send('pas de files')
                }
            })

        } catch (error) {
            res.status(400).json(error)
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
