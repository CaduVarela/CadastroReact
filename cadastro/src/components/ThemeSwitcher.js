import "./ThemeSwitcher.css";
//import { TfiLightBulb } from "react-icons/tfi";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";

const ThemeSwitcher = ({theme, onClick}) => {

    return(
        <button id="theme-switcher" onClick={onClick}>
            <div id="bulb-cable"></div>
            {theme == 'light' ? <BsLightbulbFill/> : <BsLightbulb/>}
        </button>
    );
}

export default ThemeSwitcher;