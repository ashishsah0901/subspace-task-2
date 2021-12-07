import React from "react";
import "./businessdetails.css";

const BusinessDetails = () => {
    return (
        <div className="businessdetails">
            <form>
                <div className="businessdetails_inputs">
                    <label htmlFor="name">
                        PAN Holder's Name<span>*</span>
                    </label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Business Owner's PAN"
                    />
                </div>
                <div className="businessdetails_inputs">
                    <label htmlFor="number">
                        PAN<span>*</span>
                    </label>
                    <input
                        name="number"
                        id="number"
                        placeholder="Name as per PAN"
                    />
                </div>
                <p>
                    We verify the details with the central PAN database. Please
                    ensure you enter the correct details
                </p>
                <div className="businessdetails_inputs">
                    <label htmlFor="billing">
                        Billing Label<span>*</span>
                    </label>
                    <input name="billing" id="billing" />
                </div>
                <div className="businessdetails_inputs">
                    <label htmlFor="address">
                        Address<span>*</span>
                    </label>
                    <textarea
                        placeholder="Enter Street Address"
                        rows="3"
                        type="text"
                        name="address"
                        id="address"
                    />
                </div>
                <div className="businessdetails_inputs">
                    <label htmlFor="code">
                        Pin Code<span>*</span>
                    </label>
                    <input name="code" id="code" type="number" />
                </div>
                <div className="businessdetails_inputs">
                    <label htmlFor="city">
                        City<span>*</span>
                    </label>
                    <input name="city" id="city" />
                </div>
                <div className="businessdetails_inputs">
                    <label htmlFor="state">
                        State<span>*</span>
                    </label>
                    <select name="state" id="state">
                        <option value="Select" selected>
                            Select
                        </option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default BusinessDetails;
