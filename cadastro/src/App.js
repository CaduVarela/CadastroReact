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

    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.remove('light');
      document.body.classList.remove('dark');
    }
    else {
      setTheme('light');
      document.body.classList.remove('dark');
      document.body.classList.remove('light');
    }
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
