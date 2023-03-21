import './App.css';

import {useState, useEffect} from "react";
import DropdownMenu from "./components/DropdownMenu";

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme == "dark" || theme == "" ? "app dark" : "app light"}>
      <DropdownMenu>
        <li>
          <a href="./index.php">Home</a>
        </li>
        <li>
          <a href="./signup.php">Signup</a>
        </li>
        <li>
          <a href="./login.php">Login</a>
        </li>
      </DropdownMenu>
    </div>
  );
}

export default App;
