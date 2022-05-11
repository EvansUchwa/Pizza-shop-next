import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from "next/router"
import { setModalContentOnStore, setModalOnStore } from '../../../Store/actions/modalActions'
import { AddProductModal, DeleteProductModal, ProductDetailModal, UpdateProductModal } from './modals'

function ProductManager({ styles, products }) {
    const dispatch = useDispatch()
    const router = useRouter()


    function viewProductActionModal(action = null, product = null,) {
        let comp = null;
        if (action == "create") {
            comp = <AddProductModal
                props={{ styles, router }} />;
        } else if (action == "read") {
            comp = <ProductDetailModal
                props={{ product, styles, router }} />;
        } else if (action == "update") {
            comp = <UpdateProductModal
                props={{ product, styles, router }} />;
        } else if (action == "delete") {
            comp = <DeleteProductModal props={{ productId: product._id, styles, router }} />;
        }
        dispatch(setModalContentOnStore(comp))
        dispatch(setModalOnStore(true))
    }
    return (
        <div>
            <button onClick={() => viewProductActionModal("create")}>Ajouter un produit</button>
            {
                products.length > 0 ? <table className={styles.dashTable}>
                    <thead>
                        <tr>
                            <th>N*</th>
                            <th>Produit</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr
                                key={"product nb " + index}>
                                <td>{index + 1} </td>
                                <td>{product.name}</td>
                                <td>{
                                    product.sizesAndPrices.map((sap, prIndex) => <b
                                        key={"product price nb" + prIndex}>
                                        {sap.price} €,
                                    </b>)
                                } </td>
                                <td>
                                    <i className='mdi mdi-eye'
                                        onClick={() => viewProductActionModal("read", product)}></i>
                                    <i className='mdi mdi-pencil'
                                        onClick={() => viewProductActionModal("update", product)}></i>
                                    <i className='mdi mdi-delete'
                                        onClick={() => viewProductActionModal("delete", product)}></i>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p>Aucun produit ajouté</p>
            }
        </div>
    )
}

export default ProductManager
