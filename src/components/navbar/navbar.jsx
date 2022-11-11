import Navlinks from "../navlinks";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";


function Navbar(props) {

    let logButton = undefined;

    if (props.logged) {
        logButton = LogoutButton();
    } else {
        logButton = LoginButton();
    };

    return (
        <header className="blog-header py-3 m-3">
            <div className="row flex-nowrap justify-content-between align-items-center">

                <Navlinks></Navlinks>

                <div className="col-2 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24">
                            <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="7.5"></circle>
                            <path d="M21 21l-5.2-5.2"></path>
                        </svg>
                    </a>
                    {logButton}
                </div>
            </div>
        </header >
    );
}
export default Navbar;