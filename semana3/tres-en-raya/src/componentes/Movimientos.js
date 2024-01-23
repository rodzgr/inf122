import React from 'react';

function Movimientos({ descripcion, funcion }) {
    return (

        <button className="movimiento" onClick={funcion}>
            {descripcion}
        </button>

    );
}

export default Movimientos;