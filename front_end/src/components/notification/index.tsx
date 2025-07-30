import { Bell } from "lucide-react";
import './index.scss'

export default function Notification(props: {size: number}) {
    return (
        <button className="notification-button">
            <Bell size={props.size} color="#B6BBC3"/>
        </button>
    )
}