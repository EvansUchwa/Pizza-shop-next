import axios from "axios"
import moment from "moment"
import { useState } from "react"
import { Form } from "../../../globalComponents/Form"
import { ConfirmationMessage } from "../../../globalComponents/Modal"
import { getClientProtocolAndHost } from "../../../utils/request"
import { getPrice, getSizes, makeSizesAndPricesArray, orderThePrices, orderTheSizes } from "../../../utils/sizeAndprice"
import { ProductFormFields } from "../formUI"


export const ProductDetailModal = ({ props }) => {
    const { product, styles } = props
    return <div className={styles.detailModal}>
        <p>
            <b>Nom du produit</b>
            <span>{product.name}</span>
        </p>
        <p>
            <b>Prix du produit</b>
            {
                product.sizesAndPrices.map((sp, prIndex) => <span
                    key={"product price nb" + prIndex}>
                    {sp.price} €,
                </span>)
            }
        </p>
        <p>
            <b>Taille du produit</b>
            {
                product.sizesAndPrices.map((sp, prIndex) => <span
                    key={"product type nb" + prIndex}>
                    {sp.type},
                </span>)
            }
        </p>
        <p>
            <b>Description du produit</b>
            <span>{product.description}</span>
        </p>
        <p>
            <b>Date d'ajout</b>
            <span>
                {moment(product.createdAt).format("DD-MM-YYYY")}
            </span>
        </p>
    </div>
}

export const AddProductModal = ({ props }) => {
    const { router } = props;
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        sizes: [],
        small_price: 0,
        medium_price: 0,
        big_price: 0,
        img: []
    });

    async function handleSubmit() {
        const sizes = orderTheSizes(formValues.sizes);
        const prices = orderThePrices(formValues.sizes, formValues)
        const newPizza = {
            name: formValues.name, description: formValues.description,
            sizesAndPrices: makeSizesAndPricesArray(sizes, prices)
        }
        const body = new FormData();
        body.append('data', JSON.stringify(newPizza))


        body.append('img', formValues.img)


        const addPizza = await axios.post(getClientProtocolAndHost() + "/api/product", body)
        addPizza.data._id && router.replace(router.asPath)
    }
    return <Form props={{ submitFunction: handleSubmit }} >
        <ProductFormFields props={{ formValues, setFormValues }} />
        <div className="formBtn">
            <button>Ajouter la pizza</button>
        </div>
    </Form>
}

export const UpdateProductModal = ({ props }) => {
    const { product, router } = props;
    const [formValues, setFormValues] = useState({
        name: product.name,
        description: product.description,
        sizes: getSizes(product.sizesAndPrices),
        small_price: getPrice(product.sizesAndPrices, "petite"),
        medium_price: getPrice(product.sizesAndPrices, "moyenne"),
        big_price: getPrice(product.sizesAndPrices, "grande")
    });

    async function handleSubmit() {
        const sizes = orderTheSizes(formValues.sizes);
        const prices = orderThePrices(formValues.sizes, formValues)
        const body = {
            name: formValues.name,
            description: formValues.description,
            sizesAndPrices: makeSizesAndPricesArray(sizes, prices),
        }

        const updatePizza = await axios.put(getClientProtocolAndHost() + "/api/product/" + product._id, body)
        updatePizza.data._id && router.replace(router.asPath)
    }
    return <Form props={{ submitFunction: handleSubmit }} >
        <ProductFormFields props={{ formValues, setFormValues }} />
        <div className="formBtn">
            <button>Sauvegarder</button>
        </div>
    </Form>
}

export const DeleteProductModal = ({ props }) => {
    const { router, productId } = props;

    async function handleDelete(id) {
        const deletePizza = await axios.delete(getClientProtocolAndHost() + '/api/product/' + id)
        deletePizza.data._id && router.replace(router.asPath)
    }
    return <ConfirmationMessage props={{
        text: "Voulez vous vraiment supprimez ce produit ?",
        functionAfterConfirm: handleDelete, param: productId
    }} />
}
