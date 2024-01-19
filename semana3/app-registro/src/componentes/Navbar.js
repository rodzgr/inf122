import React from "react";
import {Link, Outlet} from "react-router-dom";
function Navbar(){
    return(
        <nav>
                <li>
                    <link to="/">inicio</link>
                </li>
                <li>
                <link to="/Login">Login</link>
                </li>
                <li>
                <link to="/Registro">Registro</link>
                </li>
                <li>
                <link to="/Perfil">Perfil</link>
                </li>
        </nav>

    );

}
export default Navbar;