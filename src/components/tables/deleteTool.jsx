import { Link } from "react-router-dom";
import eliminar from "./eliminar.png";

function DeleteTool(props) {
    if (props.tools.indexOf("delete") >= 0) {
        let url = props.path + "/delete/" + props.id;
        return (
            <Link to={url}>
                <img src={eliminar} alt="eliminar" width={20} />
            </Link>
        );
    }
    return null;
}

export default DeleteTool;