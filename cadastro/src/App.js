import './App.css';

import {useState, useEffect} from "react";
import DropdownMenu from "./components/DropdownMenu";
import SignupScreen from './components/SignupScreen';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.add(theme);
  });

  return (
    <div className="app">
      <DropdownMenu>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Signup</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </DropdownMenu>

      <SignupScreen/>
    </div>
  );
}

export default App;
