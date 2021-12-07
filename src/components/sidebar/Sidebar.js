import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DoneIcon from "@mui/icons-material/Done";
import "./sidebar.css";
import { selectActive, selectCompleted } from "../../features/appSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const active = useSelector(selectActive);
    const completed = useSelector(selectCompleted);
    const returnSteps = (title, index) => {
        return (
            <div
                className={`sidebar_step ${
                    active === index && "sidebar_active"
                } ${completed >= index && "sidebar_completed"}`}
            >
                {completed >= index && <DoneIcon fontSize="small" />}
                <h5>{title}</h5>
                {active === index && <ChevronRightIcon />}
            </div>
        );
    };
    return (
        <div className="sidebar">
            <h1>KYC Form</h1>
            <p>Complete and Submit the form to accept payments.</p>
            <div className="sidebar_steps">
                {returnSteps("Contact", 1)}
                {returnSteps("Business Overview", 2)}
                {returnSteps("Business Details", 3)}
            </div>
        </div>
    );
};

export default Sidebar;
