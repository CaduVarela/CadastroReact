import './Signup&Login.css';

import { useState } from "react";

const API = "http://localhost:5000";

const SignupScreen = () => {
    
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);
    const [sucessoCadastro, setSucessoCadastro] = useState(false);

    const handleSubmit = async (e) => {
        // Previne carregamento da pagina
        e.preventDefault();

        // Limpa mensagens de erro e sucesso
        let formInfo = document.getElementById('form-info');
        formInfo.classList.remove('success');
        formInfo.classList.remove('error');
        setSucessoCadastro(false);
        let error = false;

        // Campos do formulario
        let campoNome = e.target.campoNome;
        let campoEmail = e.target.campoEmail;
        let campoSexo = e.target.campoSexo;
        let campoSenha = e.target.campoSenha;
        let campoConfirmar = e.target.campoConfirmar

        // Verifica se as senhas coincidem
        if (campoSenha.value != campoConfirmar.value) {
            setErroSenha(true);
            formInfo.classList.add('error');
            campoSenha.classList.add('wrong');
            campoConfirmar.classList.add('wrong');
            error = true;
        } else {
            setErroSenha(false);
            campoSenha.classList.remove('wrong');
            campoConfirmar.classList.remove('wrong');
        }

        // Verifica se email ja foi usado ou não
        // Retorna total de registros com esse email
        let existe = await fetch(API+"/cadastros?_limit=1&&email="+campoEmail.value)
        .then(res => {
            return res.headers.get('x-total-count');
        });
        if (existe == 1) {
            setErroEmail(true);
            formInfo.classList.add('error');
            campoEmail.classList.add('wrong');
            error = true;
        }
        else {
            setErroEmail(false);
            campoEmail.classList.remove('wrong');
        }

        if (error) return;

        // Prepara dados para inserir no "banco de dados"
        const usuario = {
            nome: campoNome.value,
            email: campoEmail.value,
            sexo: campoSexo.value,
            senha: campoSenha.value,
        }

        // Insere no "banco de dados"
        await fetch(API+"/cadastros", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Mensagem de sucesso
        formInfo.classList.add('success');
        setSucessoCadastro(true);

        // Limpa formulario
        campoNome.value = '';
        campoEmail.value = '';
        document.getElementById("campoMasculino").checked = false;
        document.getElementById("campoFeminino").checked = false;
        campoSenha.value = '';
        campoConfirmar.value = '';
    }
    
    return(
        <div className='panel'>
            <h1 className='center'>Cadastro</h1>
            <div id='form-info'>
                {sucessoCadastro && <p>Cadastro realizado com sucesso!</p>}
                <ul>
                    {erroEmail && <li>Este email já está cadastrado...</li>}
                    {erroSenha && <li>As senha não coincidem...</li>}
                </ul>
            </div>
            <form className='form-cadastro-login' onSubmit={handleSubmit}>
                <label htmlFor='campoNome' className='bold'>Nome</label>
                <input type='text' name='campoNome' id='campoNome' required/>

                <label htmlFor='campoSexo' className='bold'>Sexo</label>
                <div id='campoSexo' name='campoSexo'>
                    <input type='radio' name='campoSexo' id='campoMasculino' value='M' required/>
                    <label htmlFor='campoMasculino'>Masculino</label>

                    <input type='radio' name='campoSexo' id='campoFeminino' value='F' required/>
                    <label htmlFor='campoFeminino'>Feminino</label>

                    {/*<input type='radio' name='campoSexo' id='campoOutro' value='X' required/>
                    <label htmlFor='campoOutro'>Outro</label>*/}
                </div>
                
                <label htmlFor='campoEmail' className='bold'>Email</label>
                <input type='email' name='campoEmail' id='campoEmail' required/>

                <label htmlFor='campoSenha' className='bold'>Senha</label>
                <input type='password' name='campoSenha' id='campoSenha' required/>
                
                <label htmlFor='campoConfirmar' className='bold'>Confirmar Senha</label>
                <input type='password' name='campoConfirmar' id='campoConfirmar' required/>

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default SignupScreen;