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
                    </form>
                </div>
            </main>
        </div>
    );
}

export default App;
