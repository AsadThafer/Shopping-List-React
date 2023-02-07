import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductsMenu from "./components/ProductsMenu";
import Checkout from "./components/Checkout";
import Products from "./components/Products";

const emptycart = [];

function App() {
  const [cart, setCart] = useState(emptycart);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setCart(emptycart);
    setFullname("");
    setEmail("");
  };
  const handleDelete = ({ id }) => {
    setCart((prevcart) => {
      return prevcart.filter((product) => product.id !== id);
    });
  };
  const totalprice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  const handleSuccessfullAdd = ({ id }) => {
    setCart((prevcart) => {
      const productInCart = prevcart.find((product) => product.id === id);

      if (productInCart)
        return prevcart.map((product) =>
          product.id === id ? { ...product, count: product.count + 1 } : product
        );
      return [
        ...prevcart,
        { id, count: 1, ...Products.find((product) => product.id === id) },
      ];
    });
  };
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductsMenu onSuccessfullAdd={handleSuccessfullAdd} />
        <Cart cart={cart} handleDelete={handleDelete} totalprice={totalprice} />
        <Checkout
          totalprice={totalprice}
          onCheckoutSuccessfull={handleSubmit}
          fullname={fullname}
          email={email}
          setFullname={setFullname}
          setEmail={setEmail}
        />
      </main>
    </div>
  );
}

export default App;
