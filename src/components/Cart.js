import "./Cart.css";

const Cart = ({ cart, handleDelete, totalprice }) => {
  if (cart.length === 0) {
    return (
      <>
        <h2 className=" My_Cart">Cart</h2>
        <p className=" My_Cart">Your Cart is Empty</p>
      </>
    );
  } else {
    return (
      <>
        <h2 className=" My_Cart">Cart</h2>
        {cart.map((product) => (
          <div className="Product" key={product.id}>
            <img
              className="cart_product_image"
              src={product.image}
              alt={product.title}
            />
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
