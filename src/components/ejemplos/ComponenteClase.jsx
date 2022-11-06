import React from "react";

class ComponenteClase extends React.Component {
    render() {
        return (
            <div>
                <h3>Componente tipo clase</h3>
                <p>Con el siguiente mensaje: {this.props.msn}</p>
            </div>
        )
    };
}

export default ComponenteClase;