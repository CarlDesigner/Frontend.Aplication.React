import { useState } from "react";

function SearchBar({ setData, data, columns }) {

    const [searchField, setSearchField] = useState("");
    let onChangeSearchField = (e) => {
        setSearchField(e.target.value)
        console.log(e.target.value)

        let results = Search(data, columns, e.target.value)
        setData(results);
    }

    return (
        <div className="d-flex">
            <input placeholder="Buscar" className="form-control mx-5"
                type={"text"}
                value={searchField}
                onChange={onChangeSearchField} />


            <button className="btn btn-primary" type={"button"}> Buscar</button>
        </div >
    );
}

//Algoritmo de busqueda ↓
function Search(data, columns, search) {
    let results = [];
    let included = false;
    data.forEach(function (value, index) {
        included = false;
        columns.forEach(function (column, indexColum) {
            if (
                value[column]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toString().toLowerCase()) >= 0 &&
                !included
            ) {
                results.push(value);
                included = true;
            }
        });
    });
    return results;
}



export default SearchBar;