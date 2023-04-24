import './Signup&Login.css';

import { useState } from "react";

const API = "http://localhost:5000";

const LoginScreen = () => {

    const [sucessoLogin, setSucessoLogin] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);

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

        // Prepara o usuario com os dados informados no formulario
        const entrada = {
            email: campoEmail.value,
            senha: campoSenha.value,
        }

        // Encontra o usuario, se houver
        const resposta = await fetch(API+"/cadastros?email="+entrada.email, {
            method: "GET",
        }).then((resposta) => resposta.json());

        const usuario = resposta[0];

        // Verifica email
        if (!usuario) {
            setErroEmail(true);
            formInfo.classList.add('error');
            //console.log("Usuario inexistente");
            return;
        } else {
            setErroEmail(false);
            formInfo.classList.remove('error');
        };

        // Verifica senha
        if (usuario.senha != entrada.senha) {
            setErroSenha(true);
            formInfo.classList.add('error');
            //console.log("Senha errada");
            return;
        } else {
            setErroSenha(false);
            formInfo.classList.remove('error');
        };

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

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default LoginScreen;