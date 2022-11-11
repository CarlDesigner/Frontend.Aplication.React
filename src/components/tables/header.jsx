function Header(props) {
    //props.columns
    let toolsColumns = <></>;
    if (props.tools && props.tools.length > 0) {
        toolsColumns = <th scope="col">Tools</th>
    }
    return (
        <thead>
            <tr>
                {props.columns.map(
                    function (value, index) {
                        return <th scope="col">{value}</th>;
                    })}
                {toolsColumns}
            </tr>
        </thead >
    );
}

export default Header;