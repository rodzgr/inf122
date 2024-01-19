import React from "react";
 function Perfil(){
    return(
        <div className="padre">

            <label className="etiqueta">nombre </label>
            <input placeholder="pepito"></input>
            
            <label className="etiqueta">apellido</label>
            <input placeholder="perez"></input>
            
            <label className="etiqueta">contraseña</label>
            <input placeholder="12345cs"></input>
        </div>


    );

 }

export default Perfil;