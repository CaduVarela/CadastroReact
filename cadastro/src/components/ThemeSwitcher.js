import "./ThemeSwitcher.css";
//import { TfiLightBulb } from "react-icons/tfi";
//import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
 import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { IoBulb, IoBulbOutline } from "react-icons/io5";

const ThemeSwitcher = ({theme, onClick}) => {

    return(
        <button id="theme-switcher" onClick={onClick}>
            <div id="bulb-cable"></div>
            {theme == 'light' ? <IoBulb/> : <IoBulbOutline/>}
        </button>
    );
}

export default ThemeSwitcher;