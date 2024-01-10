const LoginForm = () => {
    return(
    <form action="http://localhost:3001/login" method="POST">
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="username"></input>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input>
        </div>
        <button type="submit">Login</button>
    </form>
    );
};
export default LoginForm