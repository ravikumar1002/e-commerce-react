const CartProductCard = ({ selectedItemsForCart }) => {
    return (
        <>
            {selectedItemsForCart.map((item) => {
                return (
                    <div
                        className="card-body-md card-horizontal-md horizontal-product-card"
                        key={item._id}
                    >
                        <div className="card-img flex-align-centre ">
                            <img
                                src={item.imgSources}
                                alt={item.title}
                                className="card-md-img horizontal-product-card-img"
                            />
                        </div>
                        <div className="card-content-container">
                            <div className="card-img-heading">
                                <h4 className="card-heading">{item.title}</h4>
                            </div>

                            <div className="card-content">
                                <p>
                                    <span className="fs-md fw-500">{item.price}</span>
                                    <span className="text-decoration-line-through text-gray">
                                        3999
                                    </span>
                                </p>
                                <p>50% off</p>
                                <p className="flex-align-centre gap-2">
                                    <span>Quantity:</span>
                                    <button className="btn btn-primary">+</button>
                                    <span className="current-qty-no">{item.quantity}</span>
                                    <button className="btn btn-primary">-</button>
                                </p>
                            </div>

                            <div className="card-footer ">
                                <span className="card-btn card-horizontal-buttons">
                                    <button className="btn-block btn btn-outline p-1">
                                            Remove to wishlist
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CartProductCard ;
