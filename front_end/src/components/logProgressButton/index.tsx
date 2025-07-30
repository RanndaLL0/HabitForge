import "./index.scss";
import { Plus } from "lucide-react";

export default function LogProgressButton() {
  return (
    <button className="logprogressbutton">
      <Plus size={24} color="white" />
      <span className="logprogressbutton-title">Log Progress</span>
    </button>
  );
}
