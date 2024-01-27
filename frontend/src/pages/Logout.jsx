import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            localStorage.removeItem("user")   
        }
        navigate("/")
    })
}

export default Logout;