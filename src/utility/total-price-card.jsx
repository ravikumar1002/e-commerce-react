const CartFinalPriceCard = () => {

    return (
        <div className="cart-price-details">
            <h3 className="p-1">PRICE DETAILS</h3>

            <div>
                <p className="flex-space-between">
                    <span>Price(2 Items)</span>{" "}
                    <span>$8</span>
                </p>
                <p className="flex-space-between">
                    <span>Discount</span>
                    <span> -$7</span>
                </p>
                <p className="flex-space-between">
                    <span>Delivery Charges</span> <span>$49</span>
                </p>
            </div>

            <h3 className="flex-space-between">
                <span>TOTAL AMOUNT</span>{" "}
                <span>
                    7
                </span>
            </h3>
            <div>
                <p className="p-1">you will save on this order $0.9 </p>
                <div className="btn-block p-1">
                    <button className=" btn btn-primary ">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CartFinalPriceCard ;
