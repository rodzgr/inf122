import React  from 'react';
import Boton from './Boton';

function Login(){
    return(
        <div  className='main'  >
            <div className='padre'>
                <from>
                    <div className='usuario'>
                            <label>usuario</label>
                            <input placeholder="ingresar usuario"/> 
                    </div>
                    <div className='usuario'>
                            <label>apellidod</label>
                            <input placeholder="ingresar apellido"/> 
                    </div>
                    <div className='usuario'>
                            <label>contraseña</label>
                            <input placeholder="ingresar contraseña"/> 
                    </div>

                    <Boton/>
                </from>

            </div>

        </div>        

    );

}
export default Login;