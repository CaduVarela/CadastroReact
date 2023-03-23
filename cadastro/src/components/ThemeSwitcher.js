import "./ThemeSwitcher.css";
import { TfiLightBulb } from "react-icons/tfi";

const ThemeSwitcher = () => {

    return(
        <button id="theme-switcher" onclick="switchtheme()">
            <div id="bulb-cable"></div>
            <TfiLightBulb/>
        </button>
    );
}

export default ThemeSwitcher;