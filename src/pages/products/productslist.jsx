import { products } from "../../backend/db/products";
import PriceProductCard from "../../utility/price-products-list";

const ProductsListShow = () => {
    const showProductsItems = [...products];

    return (
        <div className="product-items-container">
            <div className="flex-align-centre py-2">
                <h2>Showing All Product</h2>
                <span> </span>
                <p>(showing 20 products)</p>
            </div>
            <div className="product-items">
                <PriceProductCard productsData={showProductsItems} />
            </div>
        </div>
    );
};

export default ProductsListShow;
