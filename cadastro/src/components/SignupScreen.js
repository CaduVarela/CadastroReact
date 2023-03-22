import './Signup&Login.css';

const SignupScreen = () => {
    return(
        <div className='panel'>
            <h1 className='center'>Cadastro</h1>
            <form className='form-cadastro-login' action=''>
                <label htmlFor='campo-nome' className='bold'>Nome</label>
                <input type='text' name='campo-nome' id='campo-nome' required/>

                <label htmlFor='campo-sexo' className='bold'>Sexo</label>
                <div id='campo-sexo' name='campo-sexo'>
                    <input type='radio' name='campo-sexo' id='campo-masculino' required/>
                    <label htmlFor='campo-masculino'>Masculino</label>

                    <input type='radio' name='campo-sexo' id='campo-feminino' required/>
                    <label htmlFor='campo-feminino'>Feminino</label>

                    {/*<input type='radio' name='campo-sexo' id='campo-outro'/>
                    <label htmlFor='campo-outro'>Outro</label>*/}
                </div>
                
                <label htmlFor='campo-email' className='bold'>Email</label>
                <input type='email' name='campo-email' id='campo-email' required/>

                <label htmlFor='campo-senha' className='bold'>Senha</label>
                <input type='password' name='campo-senha' id='campo-senha' required/>
                
                <label htmlFor='campo-confirmar' className='bold'>Confirmar Senha</label>
                <input type='password' name='campo-confirmar' id='campo-confirmar' required/>

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default SignupScreen;