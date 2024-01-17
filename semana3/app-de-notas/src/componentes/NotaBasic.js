import React from "react";

function NotaBasic(){
    return(
       // <p> className="nota">(nota)</p>
            <div>
                
                <button onClick={onEdit} >Editar </button>
                <button onClick={onDelete} >Eliminar </button>
            </div>
    )

}


export default NotaBasic;