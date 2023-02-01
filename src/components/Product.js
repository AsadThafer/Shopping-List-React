import "./Product.css";

function Product({ id, title, price, image, rating, count, addedToCart }) {
  const handleAdd = (props) => {
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
              handleAdd({
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
      <img className="product__image" src={image} alt={title} />
    </div>
  );
}

export default Product;
