import editar from "./editar.png";
import { Link } from "react-router-dom";

function UpdateTool(props) {
    if (props.tools.indexOf("update") >= 0) {
        let url = props.path + "/update/" + props.id;
        return (
            <Link to={url}>
                <img className="mx-2" src={editar} alt="editar" width={20} />
            </Link>
        );
    }
    return null;
}


export default UpdateTool;
