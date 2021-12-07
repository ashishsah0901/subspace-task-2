import React from "react";
import "./businessoverview.css";

const BusinessOverview = () => {
    return (
        <div className="businessoverview">
            <form>
                <div className="businessoverview_inputs">
                    <label htmlFor="name">
                        Business Type<span>*</span>
                    </label>
                    <select name="name" id="name">
                        <option value="Select" selected>
                            Select
                        </option>
                    </select>
                </div>
                <div className="businessoverview_inputs">
                    <label htmlFor="number">
                        Business Category<span>*</span>
                    </label>
                    <select name="number" id="number">
                        <option value="Select" selected>
                            Select
                        </option>
                    </select>
                </div>
                <div className="businessoverview_inputs">
                    <label htmlFor="email">
                        Business Category<span>*</span>
                    </label>
                    <textarea
                        placeholder="Minimim 50 characters"
                        rows="5"
                        cols="30"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <p>
                    Please give a brief description of the nature of your
                    business. Please include examples of products you sell, the
                    business category yuo operate under, your customers and the
                    channels you primarily use to conduct your business(Website,
                    offline retails etc).
                </p>
            </form>
        </div>
    );
};

export default BusinessOverview;
