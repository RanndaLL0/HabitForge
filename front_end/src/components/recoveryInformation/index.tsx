import React from "react";
import './index.scss'
import ProgressBar from "@ramonak/react-progress-bar";

export default function RecoveryInformation() {
    return (
        <div className="recovery-container">
            <h3 className="recovery-title">Recovery journey</h3>
            <ProgressBar 
                completed={60}
                baseBgColor="#374151"
                bgColor="#4ADE80"
                isLabelVisible={false}
                height="8px"
            />
            <span className="recovery-information">Day 78 of your journey</span>
        </div>
    )
}