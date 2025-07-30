import "./index.scss";
import { WineOff } from "lucide-react";
import ProgressBar from "@ramonak/react-progress-bar";
import LogProgressButton from "../logProgressButton";

export default function Card() {
  return (
    <div className="card-container">
      <header className="card-header-container">
        <div className="card-icon-container">
          <WineOff size={20} color="#005CC4" />
        </div>
        <h2 className="card-title">Alcohol-Free Living</h2>
      </header>
      <div className="card-progress-container">
        <ProgressBar
          completed={60}
          height="10px"
          baseBgColor="#374151"
          bgColor="#005CC4"
          isLabelVisible={false}
        />
        <div className="card-progress-info">
          <span>78 days</span>
          <span>Goal: 100 days</span>
        </div>

        <ul className="card-goal-container">
            <li className="card-goal-item">
                <span className="card-goal-item-title">Cravings managed</span>
                <span className="card-goal-item-stats">15/20</span>
            </li>
            <li className="card-goal-item">
                <span className="card-goal-item-title">Cravings managed</span>
                <span className="card-goal-item-stats">15/20</span>
            </li>
            <li className="card-goal-item">
                <span className="card-goal-item-title">Cravings managed</span>
                <span className="card-goal-item-stats">15/20</span>
            </li>
        </ul>
        <LogProgressButton/>
      </div>
    </div>
  );
}
