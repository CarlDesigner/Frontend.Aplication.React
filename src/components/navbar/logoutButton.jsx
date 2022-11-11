import { Link } from "react-router-dom";

function LogoutButton(props) {
    return (
        <Link
            className="btn btn-sm btn-outline-danger mx-auto">
            Logout
        </Link>
    );
}

export default LogoutButton;