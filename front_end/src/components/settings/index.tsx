import { Settings as Gear } from "lucide-react";
import './index.scss';

export default function Settings(props: {size: number}) {
    return (
        <button className="settings-button">
            <Gear size={props.size} color="#B6BBC3"/>
        </button>
    )
}