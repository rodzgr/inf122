import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar");
  }
  const suma3 = () => {
    setNumClicks(nroClicks+3);
    console.log("reiniciar");
  }
  const resta3 = () => {
    setNumClicks(nroClicks - 3);
    console.log("reiniciar");
  }
  const resta1 = () => {
    setNumClicks(nroClicks-1);
    console.log("reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">

        <Contador nroClicks={nroClicks} />
        
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={resta3} />
             <Boton texto="+1" esBotonClick={true}
            funcionClick={click} />
             <Boton texto="-1" esBotonClick={true}
            funcionClick={resta1} />
          <Boton texto="+3" esBotonClick={false}

          
          
          funcionClick={suma3} />
            <div className='cont-cancelar'>
            <Boton texto="reiniciar" esBotonClick={true}
            funcionClick={reiniciar} />


            
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
