import "./ProductsMenu.css";
import Product from "./Product";
import Product1Image from "./images/product-1.jpg";
import Product2Image from "./images/product-2.jpg";
import Product3Image from "./images/product-3.jpg";

function ProductsMenu() {
    return (
        <div className="products-menu">    
            <div className="products-menu__header">
                <h2>Products</h2>
                </div>
                <div className="products-menu__body">
            <Product 
                title={'Funny RC Robot Electronic Dog'} 
                price= {49.66}
                rating= {4.9}
                image = {Product1Image}
            />  
            <Product 
                title={'LAPTOP ASUS TUF 15.6" '}
                price= {1800.00}
                rating= {4.9}
                image = {Product2Image}
            />  
            <Product 
                title={'XBOX SERIES X '}
                price= {500.00}
                rating= {5}
                image = {Product3Image}
            />  
            </div>
        </div>
    );
};
    

export default ProductsMenu;