import './App.css';

import {useState, useEffect} from 'react';
import DropdownMenu from './components/DropdownMenu';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';

function App() {

  const [theme, setTheme] = useState('light');

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

      <SignupScreen/>
      <LoginScreen/>
    </div>
  );
}

export default App;
