import './App.css';

import Form from './components/Form';

function App() {
    return (
        <div className="App">
            <main className="login-container">
                <div className="login">
                    <Form></Form>
                    <p>
                        Ainda não é cadastrado ? {''}
                        <a href="http://localhost:3000">Cadastre-se</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
