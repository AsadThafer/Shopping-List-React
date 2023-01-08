import { useState } from "react";
import Products from "./Products";
import "./Cart.css";

const Cart = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    return (
        <div>
        <h2 className=" My_Cart" >Cart</h2>
        {cart.map((product) => (
            <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            </div>
        ))}

        {Products.map((product) => (
            <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))}
        </div>
    );

}

export default Cart;