import "./home.css";
import "../../css/main.css";

import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import demoProduct from "../../backend/db/demo-data";
import OverlayCard from "../../utility/overlaycard";
import HeroSection from "./hero-section";
import ProductShowCaseCard from "../../utility/showcase-products";
const Home = () => {
    return (
        <main>
            <OverlayCard overlayCardData={categories} />
            <HeroSection />
            <div className="home-product-card-container">
                <ProductShowCaseCard showCaseProducts={demoProduct} />
            </div>
            <div className="flex-center">
                <button>
                    <Link to="/products" className="btn btn-primary btn-md">
                        See More Product
                    </Link>
                </button>
            </div>
            <div className="page-bottom-margin"></div>
        </main>
    );
};

export default Home;
