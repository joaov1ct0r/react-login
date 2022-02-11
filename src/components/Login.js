import Form from './Form';

function Login() {
    return (
        <div className="login">
            <Form></Form>
            <p>
                Ainda não é cadastrado ? {''}
                <a href="http://localhost:3000">Cadastre-se</a>
            </p>
        </div>
    );
}

export default Login;
