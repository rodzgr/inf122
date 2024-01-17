import './App.css';
import React from 'react';
import NotaBasic from './componentes/NotaBasic.js'

function App() {
    const onDelete = ()=>(
      console.log("Editar")
    )
    const onEdit = ()=>(
      console.log("Eliminar")
    )
  return (
    
    <div className='app'>
      <NotaBasic/>

    </div>
  );
}

export default App;
