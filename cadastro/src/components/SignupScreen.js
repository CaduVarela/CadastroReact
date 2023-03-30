import './Signup&Login.css';

import { useState } from "react";

const API = "http://localhost:5000";

const SignupScreen = () => {
    
    const [usuarios, setUsuarios] = useState([]);

    const handleSubmit = async (e) => {
        // Previne carregamento da pagina
        e.preventDefault();

        // Retorna total de cadastros ja feitos
        /*
        const totalRecords = await fetch(API+"/cadastros")
        .then(res => {
            return res.headers["x-total-count"]
        });
        console.log("Res: "+totalRecords);
        */



        const usuario = {
            nome: e.target.campoNome.value,
            email: e.target.campoEmail.value,
            sexo: e.target.campoSexo.value,
            senha: e.target.campoSenha.value,
        }

        await fetch(API+"/cadastros", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        });

    }
    
    return(
        <div className='panel'>
            <h1 className='center'>Cadastro</h1>
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
                <input type='password' name='campoSenha' id='campoSenha' className='wrong' required/>
                
                <label htmlFor='campoConfirmar' className='bold'>Confirmar Senha</label>
                <input type='password' name='campoConfirmar' id='campoConfirmar' required/>

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default SignupScreen;