import "./index.scss";
import { Flame } from "lucide-react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function DaystreakInfo() {
  return (
    <div className="daystreak-container">
      <div className="daystreak-title-container">
        <div className="daystreak-icon-container">
            <Flame size={20} color="white"/>
        </div>
        <h3 className="daystreak-title">
          You're on a 78-day streak! Keep going, you're doing great!
        </h3>
      </div>

      <div className="daystreak-milestone">
        <span className="milestone-title">Next Milestone: 90 days</span>
        <ProgressBar
          completed={80}
          isLabelVisible={false}
          bgColor="#D01872"
          baseBgColor="#374151"
          height="8px"
          width="8rem"
        />
      </div>
    </div>
  );
}
