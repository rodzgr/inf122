import React, { useState } from 'react';
import '../styles/Juego.css';
import Historial from './Historial';
import TableroE from './TableroE';

function Juego() {
  const estadoInicial = {
    cuadros: Array(9).fill(null),
  };

  const [historial, setHistorial] = useState([estadoInicial]);
  const [nroMovimiento, setNroMovimiento] = useState(0);
  const [jugador, setJugador] = useState("X");

  const click = (i) => {
    const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
    const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
    const cuadros = movimientoActual.cuadros.slice();

    if (cuadros[i] === null && !calcularGanador(cuadros)) {
      cuadros[i] = jugador;
      setJugador(jugador === "X" ? "O" : "X");
      setHistorial(nuevoMovimiento.concat([{ cuadros }]));
      setNroMovimiento(nuevoMovimiento.length);
    }
  };

  const saltarA = (movimiento) => {
    setNroMovimiento(movimiento);
    setJugador(movimiento % 2 === 0 ? "X" : "O");
  };

  const limpiarHistorial = () => {
    setHistorial([estadoInicial]);
    setNroMovimiento(0);
    setJugador("X");
  };

  const movimientoActual = historial[nroMovimiento];
  const ganador = calcularGanador(movimientoActual.cuadros);

  return (
    <div className="juego">
      <div className="juego-tablero">
        <h2>
          {ganador
            ? `Ganador: ${ganador}`
            : nroMovimiento === 9
            ? "Empate"
            : `Próximo jugador: ${jugador}`}
        </h2>
        <TableroE cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
      </div>
      <Historial historial={historial} saltarA={saltarA} />
      <button className='limpiar' onClick={limpiarHistorial}>Limpiar Historial</button>
    </div>
  );
}

export default Juego;

function calcularGanador(cuadros) {
  const lineas = [
    [0, 1, 2], // primera fila
    [3, 4, 5], // segunda fila
    [6, 7, 8], // tercera fila
    [0, 3, 6], // primera columna
    [1, 4, 7], // segunda columna
    [2, 5, 8], // tercera columna
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];

  for (let i = 0; i < lineas.length; i++) {
    const [a, b, c] = lineas[i];
    if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
      return cuadros[a];
    }
  }

  return null;
}
