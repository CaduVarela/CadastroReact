import './App.css';

import {useState, useEffect} from 'react';
import DropdownMenu from './components/DropdownMenu';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const [theme, setTheme] = useState('light');

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
      <ThemeSwitcher theme={theme} onClick={handleThemeSwitch}/>

      <SignupScreen/>
      <LoginScreen/>
    </div>
  );
}

export default App;
