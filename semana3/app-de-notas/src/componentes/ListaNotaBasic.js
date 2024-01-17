import React, {userState} from "react";
import NotaBasic from "./NotaBasic";
import '../styles/ListaNotas.css';
function ListaNotasBasic(){

    const [notas,setnotas]=userState([])
    const [texto,settexto]=userState([])
const addNota = ()=>{
    setnotas([..notas,texto])
    console.log("agredar nota");

}
const onDelete=()=>{
    console.log("eliminar nota");
}
const onEdit =()=>{
    console.log("editar");
}
return(
    <div className="click">
            
         </div>


)

}
