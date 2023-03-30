import "./ThemeSwitcher.css";
//import { TfiLightBulb } from "react-icons/tfi";
//import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
// import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { IoBulb, IoBulbOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.classList.add(theme);
    });

    function handleThemeSwitch()  {
        document.body.classList.remove(theme);
        if (theme === 'light')
          setTheme('dark');
        else
          setTheme('light');
    }

    return(
        <button id="theme-switcher" onClick={handleThemeSwitch}>
            <div id="bulb-cable"></div>
            {theme == 'light' ? <IoBulb/> : <IoBulbOutline/>}
        </button>
    );
}

export default ThemeSwitcher;