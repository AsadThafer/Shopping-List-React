import './Product.css';

function Product({title,price,rating,image}) {
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
            <small>$</small><strong>{price}</strong>
            </p>
            <div className="product__rating">
            <p>{rating} ⭐</p>
            </div>
            <button onClick={
                () => {
                    console.log('Add to basket');
                }
            } >Add to Basket</button>
        </div>
        <div>
        <img className="product__image" src={image} alt={title} />
        
        </div>
        </div>
    );
}

export default Product;