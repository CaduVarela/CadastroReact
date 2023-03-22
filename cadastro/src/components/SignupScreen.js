import './Form.css';

const SignupScreen = () => {
    return(
        <div className="panel">
            <h1 className="center">Cadastro</h1>
            <form className="form-cadastro" action="">
                <label htmlFor="campo-nome" className="bold">Nome</label>
                <input type="text" name="campo-nome" className="campo-nome" required/>

                <label htmlFor="campo-sexo" className="bold">Sexo</label>
                <div className="campo-sexo">
                    <input type="radio" name="campo-sexo" className="campo-masculino" required/>
                    <label htmlFor="campo-masculino">Masculino</label>

                    <input type="radio" name="campo-sexo" className="campo-feminino" required/>
                    <label htmlFor="campo-feminino">Feminino</label>

                    {/*<input type="radio" name="campo-sexo" className="campo-outro"/>
                    <label htmlFor="campo-outro">Outro</label>*/}
                </div>
                
                <label htmlFor="campo-email" className="bold">Email</label>
                <input type="email" name="campo-email" required/>

                <label htmlFor="campo-senha" className="bold">Senha</label>
                <input type="password" name="campo-senha" className="campo-senha" required/>
                
                <label htmlFor="campo-confirmar" className="bold">Confirmar Senha</label>
                <input type="password" name="campo-confirmar" className="campo-confirmar" required/>

                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}

export default SignupScreen;