import { Link } from "react-router-dom";

function LoginButton(props) {
    return (
        <Link
            to={"/login"}
            className="btn btn-sm btn-outline-success mx-auto">
            Login
        </Link>
    );
}

export default LoginButton;