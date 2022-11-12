
import Tools from "./tools";
function Body(props) {

    /* props.data = { props.data }
    props.columns = { props.column }
    props.tools = { props.tools } */
    return (
        <tbody>
            {
                props.data.map(
                    function (row, rowIndex) {
                        return (
                            <tr>
                                {
                                    props.columns.map(
                                        function (column, columnIndex) {

                                            if (columnIndex === 0) {
                                                return <th scope="row">{row[column]}</th>
                                            }
                                            return <td>{row[column]}</td>
                                        }
                                    )
                                }
                                <Tools tools={props.tools} path={props.path} id={row["id"]} />
                            </tr>
                        );
                    }
                )
            }

        </tbody>
    );
}

export default Body;