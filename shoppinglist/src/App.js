import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductsMenu from "./components/ProductsMenu";

function App(props) {
  const [cart, setCart] = useState([]);
  const handleDelete = ({ id }) => {
    setCart((prevcart) => {
      return prevcart.filter((product) => product.id !== id);
    });
  };

  const HandleSuccessfullAdd = ({ id, title, price, image, rating, count }) => {
    const product = {
      id,
      title,
      price,
      image,
      rating,
      count,
    };
    console.log("Added to Cart", product);
    console.log("Cart", cart);

    setCart((prevcart) => {
      const productInCart = prevcart.find((product) => product.id === id);
      if (productInCart)
        return prevcart.map((product) =>
          product.id === id ? { ...product, count: product.count + 1 } : product
        );
      return [...prevcart, product];
    });
  };
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductsMenu onAddSuccessfull={HandleSuccessfullAdd} />
        <Cart cart={cart} handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
