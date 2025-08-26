import './index.scss'
import { House,Goal,ClipboardCheck,ShieldHalf,ChartLine ,Users,BookText,Trophy,MessageCircle } from "lucide-react";

export default function SectionsList() {
    return (
        <ul className="list-container">
            <li className="list-item">
                <House size={22} color='white'/>
                <span>Dashboard</span>
            </li>
            <li className="list-item">
                <Goal size={22} color='white'/>
                <span>Goals</span>
            </li>
            <li className="list-item">
                <ClipboardCheck size={22} color='white'/>
                <span>Habits</span>
            </li>
            <li className="list-item">
                <ShieldHalf size={22} color='white'/>
                <span>Recovery</span>
            </li>
            <li className="list-item">
                <ChartLine size={22} color='white'/>
                <span>Progress</span>
            </li>
            <li className="list-item">
                <Users size={22} color='white'/>
                <span>Support Groups</span>
            </li>
            <li className="list-item">
                <BookText size={22} color='white'/>
                <span>Journal</span>
            </li>
            <li className="list-item">
                <Trophy size={22} color='white'/>
                <span>Achievements</span>
            </li>
            <li className="list-item">
                <MessageCircle size={22} color='white'/>
                <span>Community</span>
            </li>
        </ul>
    )
}