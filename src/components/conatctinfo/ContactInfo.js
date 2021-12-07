import React from "react";
import "./contactinfo.css";

const ContactInfo = () => {
    return (
        <div className="contactinfo">
            <form>
                <div className="contactinfo_inputs">
                    <label htmlFor="name">
                        Contact Name<span>*</span>
                    </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="contactinfo_inputs">
                    <label htmlFor="number">
                        Contact Number<span>*</span>
                    </label>
                    <input type="number" name="number" id="number" />
                </div>
                <div className="contactinfo_inputs">
                    <label htmlFor="email">
                        Contact Email<span>*</span>
                    </label>
                    <input type="email" name="email" id="email" />
                </div>
            </form>
        </div>
    );
};

export default ContactInfo;
