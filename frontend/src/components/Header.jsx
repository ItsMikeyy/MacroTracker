import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <header>
            <h1>MACRO+</h1>
            <div className="container">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;