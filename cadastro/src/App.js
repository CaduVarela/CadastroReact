import './App.css';

import {useState, useEffect} from 'react';
import DropdownMenu from './components/DropdownMenu';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import ThemeSwitcher from './components/ThemeSwitcher';

const API = "http://localhost:5000";

function App() {

  const [usuario, setUsuario] = useState();
  const [loginUpdate, setLoginUpdate] = useState(false);

  const getUserByEmail = async (email) => {
    const resposta = await fetch(API+"/cadastros?email="+email, {
        method: "GET",
    }).then((resposta) => resposta.json());
    return resposta[0];
  }

  const getUsuario = async () => {
    let emailLogado = sessionStorage.getItem('user');
    if (!emailLogado) {
        emailLogado = localStorage.getItem('user');
    }

    if (!emailLogado) return; // Não tem sessao salva

    setUsuario(await getUserByEmail(emailLogado));
  }

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUsuario(null);
    setLoginUpdate(!loginUpdate);
  }

  useEffect(() => {
    getUsuario();
  }, [loginUpdate]);

  return (
    <div className='app'>
      <DropdownMenu>
        <li>
          <button>Home</button>
        </li>
        {!usuario && 
        <li>
          <button>Signup</button>
        </li>}
        {!usuario &&
        <li>
          <button>Login</button>
        </li>}
        {usuario &&
        <li>
          <button onClick={clearStorage}>Sair</button>
        </li>
        }
      </DropdownMenu>
      <ThemeSwitcher/>

      {usuario &&
      <div id='user-info' className='panel'>
        <h1>Info</h1>
          <div>
            <p><span className='bold'>Nome: </span>{usuario.nome}</p>
            <p><span className='bold'>sexo: </span>{usuario.sexo == 'M' ? 'masculino' : 'feminino'}</p>
            <p><span className='bold'>Email: </span>{usuario.email}</p>
            <button onClick={clearStorage}>Sair da conta</button>
          </div>
      </div>}

      {!usuario && <LoginScreen setLoginUpdate={setLoginUpdate} loginUpdate={loginUpdate}/>}
      {!usuario && <SignupScreen/>}
    </div>
  );
}

export default App;
