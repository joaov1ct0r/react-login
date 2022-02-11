function Form() {
    return (
        <form>
            <input type="email" name="email" placeholder="Email" autoFocus />

            <input type="password" name="password" placeholder="Senha" />

            <button type="submit">Login</button>
        </form>
    );
}

export default Form;
