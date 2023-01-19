import "./Cart.css";

const Cart = ({ cart, handleDelete, totalprice }) => {
  if (cart.length === 0) {
    return (
      <div>
        <h2 className=" My_Cart">Cart</h2>
        <p className=" My_Cart">Your Cart is Empty</p>
      </div>
    );
  } else {
    return (
      <>
        <h2 className=" My_Cart">Cart</h2>
        {cart.map((product) => (
          <div className="Product" key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>x{product.count}</p>
            <button
              className="delete_button"
              onClick={() => handleDelete(product)}
            >
              Delete
            </button>
          </div>
        ))}
        <div className="Total">
          <p>Total </p>
          <p className="price">${totalprice}</p>
        </div>
      </>
    );
  }
};
export default Cart;
