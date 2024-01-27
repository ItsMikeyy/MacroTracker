import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Submit")
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: username,
                password: password
            })
        }

        const res = await fetch("http://localhost:3001/login",requestOptions)
        const url = res.url
        console.log(url)
        if (url != "http://localhost:3000/") {
            console.log("fail")
            return
        }
        localStorage.setItem("user", username)
        navigate("/")

    }
    return(
    <form onSubmit={handleSubmit}>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="username" value={username} onChange={({ target }) => setUsername(target.value)}></input>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)}></input>
        </div>
        <button type="submit">Login</button>
    </form>
    );
};
export default LoginForm