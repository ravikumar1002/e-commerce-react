
import "./filter.css";

const Filter = () => {
    return (
            <div className="filter-wrapper">
                <div className="flex-space-between p-0 filter-section">
                    <h2 className="filter-section">FIlter</h2>
                    <button className="btn-sm">Clear</button>
                </div>
                <div className="filter-section">
                    <h3>Price</h3>
                    <p className="text-gray flex-space-between p-0">
                        <span>50</span> <span>100</span> <span>150</span>
                    </p>
                    <input type="range" className="w-100" />
                </div>
                <div className="filter-section">
                    <h3>Category</h3>
                    <form action="" className="flex-col">
                        <label htmlFor="men">
                            <input
                                type="checkbox"
                                id="men"
                                name="category"
                                className="category"
                            />
                            <span>Horror</span>
                        </label>

                        <label htmlFor="women">
                            <input
                                type="checkbox"
                                id="women"
                                name="category"
                                className="category"
                            />
                            <span>Romantic</span>
                        </label>
                        <label htmlFor="women">
                            <input
                                type="checkbox"
                                id="women"
                                name="category"
                                className="category"
                            />
                            <span>funny</span>
                        </label>
                        <label htmlFor="women">
                            <input
                                type="checkbox"
                                id="women"
                                name="category"
                                className="category"
                            />
                            <span>Drama</span>
                        </label>
                    </form>
                </div>
                <div className="filter-section">
                    <h3>Rating</h3>
                    <form action="" className="flex-col">
                        <span>
                            <label htmlFor="rating-4">
                                <input
                                    type="radio"
                                    id="rating-4"
                                    className="input-radio"
                                    name="rating"
                                />
                                4 star and above
                            </label>
                        </span>
                        <span>
                            <label htmlFor="rating-3">
                                <input
                                    type="radio"
                                    id="rating-3"
                                    className="input-radio"
                                    name="rating"
                                />
                                3 star and above
                            </label>
                        </span>
                        <span>
                            <label htmlFor="rating-2">
                                <input
                                    type="radio"
                                    id="rating-2"
                                    className="input-radio"
                                    name="rating"
                                />
                                2 star and above
                            </label>
                        </span>
                        <span>
                            <label htmlFor="rating-1">
                                <input
                                    type="radio"
                                    id="rating-1"
                                    className="input-radio"
                                    name="rating"
                                />
                                1 star and above
                            </label>
                        </span>
                    </form>
                </div>

                <div className="filter-section">
                    <h3>Sort by</h3>
                    <fieldset className="flex-col">
                        <legend>Sort By:</legend>
                        <span>
                            <label htmlFor="sort-1">
                                <input
                                    type="radio"
                                    name="sort"
                                    id="sort-1"
                                    className="input-radio"
                                />
                                Price - High to Low
                            </label>
                        </span>
                        <span>
                            <label htmlFor="sort-2">
                                <input
                                    type="radio"
                                    name="sort"
                                    id="sort-2"
                                    className="input-radio"
                                />
                                Price - Low to high
                            </label>
                        </span>
                    </fieldset>
                </div>
            </div>
    );
};

export default Filter ;