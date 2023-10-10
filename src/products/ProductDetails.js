import { useParams } from "react-router-dom";

import styles from './ProductDetails.module.css'
import { toCurrencyFormat } from "../utils/currency_format";
import products from './products.json'

function ProductDetails(){
    const { slug } = useParams()
    const product = products.find(product => product.slug === slug)

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <img src={require(`../images/${product.image}`)} alt="" />
                <div className={styles.ProductDetails}>
                    <div className={styles.labels}>
                        <br/>
                        <br/>
                        <br/>
                        <div><strong>Product Name: </strong>  </div>
                        <div> {product.name} </div>
                        <br/>
                        <div><strong>Description: </strong> </div>
                        <div> {product.description} </div>
                        <br/>
                        <br/>
                        <div><strong>Price: </strong>  </div>
                        <div> {toCurrencyFormat(product.price)} </div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
