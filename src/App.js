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
                    </form>
                </div>
            </main>
        </div>
    );
}

export default App;
