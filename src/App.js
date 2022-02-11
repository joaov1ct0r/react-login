import './App.css';

function App() {
    return (
        <div className="App">
            <main className="login-container">
                <div className="login">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoFocus
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                        />

                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Ainda não é cadastrado ?
                        <a href="http://localhost:3000">Cadastre-se</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
