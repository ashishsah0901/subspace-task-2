import React from "react";
import "./body.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    selectActive,
    selectCompleted,
    setActive,
    setCompleted,
} from "../../features/appSlice";
import ContactInfo from "../conatctinfo/ContactInfo";
import BusinessOverview from "../businessoverview/BusinessOverview";
import BusinessDetails from "../businessdetails/BusinessDetails";

const Body = () => {
    const dispatch = useDispatch();
    const active = useSelector(selectActive);
    const completed = useSelector(selectCompleted);
    const handleNext = (e) => {
        e.preventDefault();
        dispatch(setCompleted(completed + 1));
        dispatch(setActive(active + 1));
    };
    return (
        <div className="body">
            <div className="body_header">
                <h2>
                    {active === 1
                        ? "Contact Info"
                        : active === 2
                        ? "Business Overview"
                        : "Business Details"}
                </h2>
                {active === 1 && <CloseIcon />}
            </div>
            <div className="body_body">
                {active === 1 ? (
                    <ContactInfo />
                ) : active === 2 ? (
                    <BusinessOverview />
                ) : (
                    <BusinessDetails />
                )}
            </div>
            <div className="body_footer">
                {active >= 3 ? (
                    <div className="body_terms">
                        <Checkbox size="small" />
                        <p>
                            I agree to Razopay <span>Terms and Conditions</span>
                        </p>
                    </div>
                ) : (
                    <Button variant="outlined" className="body_save">
                        Save
                    </Button>
                )}
                <Button variant="contained" onClick={handleNext}>
                    {active < 3 ? "Save & Next" : "Submit & Verify"}
                </Button>
            </div>
        </div>
    );
};

export default Body;
