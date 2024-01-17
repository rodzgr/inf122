import CuadroB from "./CuadroB";
import '../styles/tablero.css';
import React from "react";

function TableroE ({cuadro,onclick}){
    function renderizarCuadro(i){
        return(
            <CuadroB
                valor ={cuadros[i]}
                funcion={() => onclick(i)}
            />
        );
    
        }
}


return (
    <div>
        <div className="tablero">
            {renderizarCuadro(0)}
            {renderizarCuadro(1)}
            {renderizarCuadro(2)}
            {renderizarCuadro(3)}
            {renderizarCuadro(4)}
            {renderizarCuadro(5)}
            {renderizarCuadro(6)}
            {renderizarCuadro(7)}
            {renderizarCuadro(8)}
        </div>
    </div>
);

export default TableroE;