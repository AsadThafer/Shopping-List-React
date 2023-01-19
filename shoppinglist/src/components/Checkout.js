import "./Checkout.css";
import { useState } from "react";

function Checkout({ totalprice, onCheckoutSuccessfull }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleFullname = (e) => {
    setFullname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalprice === 0) {
      alert("Your cart is empty.");
      return;
    }
    if (fullname === "") {
      alert("Please enter your full name.");
      return;
    }
    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    alert(
      "Thanks " +
        fullname +
        " for your purchase. Your total is $" +
        totalprice +
        "." +
        " Your cart has been emptied." +
        " You will receive an email at " +
        email +
        " shortly."
    );
    onCheckoutSuccessfull();
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout__inputs">
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleFullname}
          id="fullname"
          required
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleEmail}
          required
        />
        <button
          type="submit"
          className="checkout__button"
          onClick={handleSubmit}
        >
          Checkout Cart
        </button>
      </form>
    </div>
  );
}

export default Checkout;
