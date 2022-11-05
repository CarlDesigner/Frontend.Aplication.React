import { Link } from "react-router-dom"

function Navlinks(props) {

    let navLinksNavbar = (
        <>
            <div className="col-2 pt-1">
                <Link to={"/"} className="link-secondary">Home</Link>
            </div>

            <div className="col-2 pt-1">
                <Link to={"/producto"} className="link-secondary">Producto</Link>
            </div>

            <div className="col-2 pt-1">
                <Link to={"/categoria"} className="link-secondary">Categoria</Link>
            </div>

            <div className="col-2 pt-1">
                <Link to={"/usuarios"} className="link-secondary">Usuarios</Link>
            </div>

            <div className="col-2 pt-1">
                <Link to={"/nosotros"} className="link-secondary">Nosotros</Link>
            </div>
        </>
    );

    let navLinksFooter = (
        < ul className="nav justify-content-center border-bottom pb-3 mb-3" >
            <li className="nav-item mx-3">
                <Link to={"/"} className="link-secondary">Home</Link>
            </li>
            <li className="nav-item mx-3">
                <Link to={"/producto"} className="link-secondary">Producto</Link>
            </li>
            <li className="nav-item mx-3">
                <Link to={"/categoria"} className="link-secondary">Categoria</Link>
            </li>
            <li className="nav-item mx-3">
                <Link to={"/usuarios"} className="link-secondary">Usuarios</Link>
            </li>
            <li className="nav-item mx-3">
                <Link to={"/nosotros"} className="link-secondary">Nosotros</Link>
            </li>
        </ul >
    );

    return props.footer ? navLinksFooter : navLinksNavbar;
}

export default Navlinks;