import React from "react";
import './index.scss';
import { Anvil } from "lucide-react";
import RecoveryInformation from "../recoveryInformation";
import SectionsList from "../sectionsList";

export default function Sidebar() {
    return (
        <aside className="sidebar-container">
            <div className="title-container">
                <Anvil size={32} color='#E72987'/>
                <h1 className="title">HabitForge</h1>
            </div>
            <RecoveryInformation/>

            <SectionsList/>
        </aside>
    )
}