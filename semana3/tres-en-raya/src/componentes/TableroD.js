import React from "react";
import './style/tablero';
import CuadroB from "./CuadroB";

function TableroD({cuadros,onClick}){
    function renderizarCuadro(){
        return(
            <CuadroB 
            valor={cuadros[i]}
            funcion={()=>onClick}
        )

    }
}
