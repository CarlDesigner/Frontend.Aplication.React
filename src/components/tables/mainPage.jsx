import Table from "./table";
import CreateButton from "./createButton";
import SearchBar from "./searchBar";
import { useState } from "react";

function MainPage(props) {

    const [data, setData] = useState(props.data)

    return (
        <div>
            <div className="d-flex mx-3">
                <CreateButton path={props.path} />
                <SearchBar setData={setData} data={props.data} columns={props.columns} />
            </div>
            <Table data={data}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
                path={props.path}
            />
        </div>
    );
}

export default MainPage;