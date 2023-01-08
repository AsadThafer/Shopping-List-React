import "./ProductsMenu.css";
import Product from "./Product";
import Products from "./Products";


function ProductsMenu() {
    return (
        <div className="products-menu">    
            <div className="products-menu__header">
                <h2>Products</h2>
                </div>
                <div className="products-menu__body">
            <Product 
                id = {Products[0].id}
                title={Products[0].title}
                price= {Products[0].price}
                rating= {Products[0].rating}
                image = {Products[0].image}
            />  
            <Product 
                id = {Products[1].id}
                title= {Products[1].title}
                price= {Products[1].price}
                rating= {Products[1].rating}
                image = {Products[1].image}
            />  
            <Product 
                id = {Products[2].id}
                title= {Products[2].title}
                price= {Products[2].price}
                rating= {Products[2].rating}
                image = {Products[2].image}
            />  
            </div>
        </div>
    );
};
    

export default ProductsMenu;