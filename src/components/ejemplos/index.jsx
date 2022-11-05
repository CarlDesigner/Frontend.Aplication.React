import { Link } from "react-router-dom";
function IndexEjemplos(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/ejemplos/clase"}>
                        Ejemplo Componente TIPO CLASE
                    </Link>
                </li>
                <li>
                    <Link to={"/ejemplos/funcion"}>
                        Ejemplo Componente TIPO FUNCION
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default IndexEjemplos;