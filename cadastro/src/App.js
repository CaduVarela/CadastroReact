import './App.css';

import {useState, useEffect} from 'react';
import DropdownMenu from './components/DropdownMenu';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.add(theme);
  });

  return (
    <div className='app'>
      <DropdownMenu>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Signup</button>
        </li>
        <li>
          <button>Login</button>
        </li>
      </DropdownMenu>
      <ThemeSwitcher/>

      <SignupScreen/>
      <LoginScreen/>
    </div>
  );
}

export default App;
