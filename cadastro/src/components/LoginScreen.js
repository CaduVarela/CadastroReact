import './Signup&Login.css';

const LoginScreen = () => {

    return(
        <div className='panel'>
            <h1 className='center'>Login</h1>
            <form className='form-cadastro-login'>
                <label htmlFor='campo-email' className='bold'>Email</label>
                <input type='email' id='campo-email' name='campo-email'/>

                <label htmlFor='campo-senha' className='bold'>Senha</label>
                <input type='password' id='campo-senha' name='campo-senha'/>

                <input type='submit' value='Enviar'/>
            </form>
        </div>
    );
}

export default LoginScreen;