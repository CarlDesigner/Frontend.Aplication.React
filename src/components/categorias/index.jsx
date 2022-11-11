import Table from "../tables/table";
import getData from "../../js/getData";
function IndexCategorias(props) {

    let data = getData("url", {}, "get", {});

    return (
        <div className="mx-5">
            <div>
                <h4>Categorias</h4>
                <p>Bienvenido a Categorias</p>
            </div>
            <Table data={data}
                name={"Lista de Categorias"}
                columns={["id", "name", "description"]}
                columnsAlias={["ID", "Nombre", "Descripción"]}
                tools={["update", "delete"]}
                path={"/categoria"}
            />

        </div >
    );
}

export default IndexCategorias;