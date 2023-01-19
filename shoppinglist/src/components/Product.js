import "./Product.css";

function Product({ id, title, price, image, rating, addedToCart, count }) {
  const HandleAdd = (props) => {
    addedToCart(props);
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{rating} ⭐</p>
        </div>
        {
          <button
            onClick={() =>
              HandleAdd({
                id,
                title,
                price,
                image,
                rating,
                count,
              })
            }
          >
            Add to Cart
          </button>
        }
      </div>
      <div>
        <img className="product__image" src={image} alt={title} />
      </div>
    </div>
  );
}

export default Product;
