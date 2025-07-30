import "../header/index.scss";
import SearchBar from "../searchbar";
import Notification from "../notification";
import Settings from "../settings"

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Goals & Habits</h1>
      <div className="options-container">
        <SearchBar/>
        <Notification size={20}/>
        <Settings size={20}/>
      </div>
    </header>
  );
}
