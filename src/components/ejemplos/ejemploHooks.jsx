import React, { useState } from "react";

function EjemploHooks(props) {
    const [count, setCount] = useState(0);
    let functionClick = function () {
        setCount(count + 1);
    };

    return (
        <div className="App text-center mx-auto">
            <div className="d-flex text-center mx-auto">
                <div className=" text-center mx-auto">
                    <p>You clicked {count} times</p>

                    <button className="btn btn-success" onClick={functionClick}>
                        Click me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EjemploHooks;
