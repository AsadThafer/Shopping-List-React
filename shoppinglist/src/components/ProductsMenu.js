import "./ProductsMenu.css";
import Product from "./Product";
import Products from "./Products";

function ProductsMenu({ onAddSuccessfull }, ...props) {
  const HandleAddedProduct = (props) => {
    onAddSuccessfull(props);
  };

  return (
    <div className="products-menu">
      <div className="products-menu__header">
        <h2>Products</h2>
      </div>
      <div className="products-menu__body">
        {Products.map((product) => (
          <Product
            addedToCart={HandleAddedProduct}
            key={product.id}
            {...product}
            count={1}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsMenu;
