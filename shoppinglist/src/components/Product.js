import './Product.css';
import { useState } from 'react';


function Product({id,title,price,rating,image}) {
    const product = {id,title,price,rating,image};

    const HandleAdd = (product) => {
        console.log('Added to Cart', product);
    }
    return (
        <div key={id} className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
            <small>$</small><strong>{price}</strong>
            </p>
            <div className="product__rating">
            <p>{rating} ⭐</p>
            </div>
            { <button onClick =
            {() =>  HandleAdd(product)}>Add to Cart</button> }
        </div>
        <div>
        <img className="product__image" src={image} alt={title} />
        
        </div>
        </div>
    );
}

export default Product;