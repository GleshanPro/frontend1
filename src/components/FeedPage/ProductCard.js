import React from "react";
import product_picture from '../../img/product.png'

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product_picture} width="255" height="255"></img>
            <p className="title">{product.name}</p>
            <div className="tags">
                {/* {
                    for ()
                } */}
                <div className="tag">
                    Хлебобулочная продукция
                </div>
                <div className="tag">
                    ...
                </div>
            </div>
            {/* <div className="price">
                <p className="previous-price">
                    <s>313 ₽</s>
                </p>
                <p className="new-price">72 ₽</p>
            </div> */}
        </div>
    )
}

export default ProductCard