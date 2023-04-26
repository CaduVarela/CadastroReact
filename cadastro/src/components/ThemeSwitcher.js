import "./ThemeSwitcher.css";
//import { TfiLightBulb } from "react-icons/tfi";
//import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
// import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { IoBulb, IoBulbOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState('light');
    let firstTimeLoad = false;

    useEffect(() => {
        console.log('firstloadpage');
        if (localStorage.hasOwnProperty("theme")) {
            const newTheme = localStorage.getItem("theme")
            setTheme(newTheme);
            console.log(localStorage.getItem("theme")+'|'+theme);
        }
    }, [firstTimeLoad])

    useEffect(() => {
        document.body.classList.add(theme);
        console.log('Tema: '+theme);
    }, [theme]);

    function handleThemeSwitch()  {
        document.body.classList.remove(theme);
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    return(
        <button id="theme-switcher" onClick={handleThemeSwitch}>
            <div id="bulb-cable"></div>
            {theme == 'light' ? <IoBulb/> : <IoBulbOutline/>}
        </button>
    );
}

export default ThemeSwitcher;