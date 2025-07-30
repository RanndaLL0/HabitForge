import './index.scss'

export default function SectionMenu() {
    return (
        <nav className="sectionmenu-container">
            <ul className="sectionmenu-list">
                <li className="sectionmenu-item">
                    <span>Active Goals</span>
                </li>
                <li className="sectionmenu-item">
                    <span>Completed Goals</span>
                </li>
                <li className="sectionmenu-item">   
                    <span>Daily habits</span>
                </li>
                <li className="sectionmenu-item">
                    <span>Recovery Challenges</span>
                </li>
            </ul>
        </nav>
    )
}