import './Signup&Login.css';

import { useEffect, useState } from "react";

const API = "http://localhost:5000";

const LoginScreen = ({setLoginUpdate, loginUpdate}) => {

    const [sucessoLogin, setSucessoLogin] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);

    const getUserByEmail = async (email) => {
        const resposta = await fetch(API+"/cadastros?email="+email, {
            method: "GET",
        }).then((resposta) => resposta.json());
        return resposta[0];
    }

    const handleSubmit = async (e) => {
        // Previne carregamento da pagina
        e.preventDefault();

        // Limpa mensagens de erro e sucesso
        let formInfo = document.getElementById('form-info-login');
        formInfo.classList.remove('success');
        formInfo.classList.remove('error');
        setSucessoLogin(false);

        // campos do formulario
        let campoEmail = e.target.campoEmail;
        let campoSenha = e.target.campoSenha;
        let manterLogin = e.target.manterLogin;

        // Prepara o usuario com os dados informados no formulario
        const entrada = {
            email: campoEmail.value,
            senha: campoSenha.value,
        }

        // Encontra o usuario, se houver
        const usuario = await getUserByEmail(entrada.email);

        //console.log(entrada);
        //console.log(usuario);

        // Verifica email
        if (!usuario) {
            setErroEmail(true);
            formInfo.classList.add('error');
            campoEmail.classList.add('wrong');
            //console.log("Usuario inexistente");
            return;
        } else {
            setErroEmail(false);
            formInfo.classList.remove('error');
            campoEmail.classList.remove('wrong');
        };

        // Verifica senha
        if (usuario.senha != entrada.senha) {
            setErroSenha(true);
            formInfo.classList.add('error');
            campoSenha.classList.add('wrong');
            //console.log("Senha errada");
            return;
        } else {
            setErroSenha(false);
            formInfo.classList.remove('error');
            campoSenha.classList.remove('wrong');
        };

        // Manter Login
        localStorage.clear();
        sessionStorage.clear();
        
        if (manterLogin.checked) {
            localStorage.setItem('user', usuario.email);
        } else {
            sessionStorage.setItem('user', usuario.email);
        }

        setLoginUpdate(!loginUpdate);

        // Mensagem de sucesso
        setSucessoLogin(true);
        formInfo.classList.add("success");

        // Limpa os campos
        campoEmail.value = '';
        campoSenha.value = '';
    }

    return(
        <div className='panel'>
            <h1 className='center'>Login</h1>
            <div id='form-info-login'>
                {sucessoLogin && <p>Usuario Logado!</p>}
                <ul>
                    {erroEmail && <li>Este email não foi cadastrado...</li>}
                    {erroSenha && <li>A senha está incorreta!</li>}
                </ul>
            </div>
            <form className='form-cadastro-login' onSubmit={handleSubmit}>
                <label htmlFor='campoEmail' className='bold'>Email</label>
                <input type='email' id='campoEmail' name='campoEmail' required/>

                <label htmlFor='campoSenha' className='bold'>Senha</label>
                <input type='password' id='campoSenha' name='campoSenha' required/>

                <input type='checkbox' id='manterLogin' name='manterLogin'/>
                <label htmlFor='manterLogin' className='pointer not-selectable'>Manter Login</label>

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default LoginScreen;