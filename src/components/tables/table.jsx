import Header from "./header";
import Body from "./body";

function Table(props) {
    /* props.name = { "Lista de Categorias"}
    props.columns = { ["id", "name", "description"]}
    props.columnsAlias = { ["ID", "Nombre", "Description"]}
    props.tools = { ["update", "delete"]}
    props.path = { "/categoria"} */
    return (
        <table class="table table-striped">
            <caption>{props.name}</caption>
            <Header columns={props.columnsAlias} tools={props.tools} />
            <Body data={props.data} columns={props.column} tools={props.tools} />
        </table>
    );
}

export default Table;