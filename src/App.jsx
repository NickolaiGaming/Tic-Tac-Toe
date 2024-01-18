import React, { useState } from 'react';
import Tablero from "./tablero";
import Jugadores from "./jugadores";
import SiguienteJugador from "./siguientejugador";
import Introduccion from "./introduccion";
import "./css/styles.css"


const App = () => {
    const [reset, setReset] = useState(false)
    const [winner, setWinner] = useState("")

    const [jugador1, setJugador1] = useState("")
    const [jugador2, setJugador2] = useState("")

    const [icono, setIcono] = useState("")


    function definirJugador1(evento) {
        setJugador1(evento.target.value)
    }

    function definirJugador2(evento) {
        setJugador2(evento.target.value)
    }




    const Reset = () => {
        setReset(true)
    }

    return (
        <>
            {
                jugador1 !== "" && jugador2 !== "" && icono !== "" ? (
                    <div className='Base'>
                        <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
                            <div className='winner-text'>{winner}</div>
                            <button onClick={Reset}>Resetear</button>

                        </div>
                        <SiguienteJugador icono={icono} setIcono={setIcono} />
                        <Tablero reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} icono={icono} jugador1={jugador1} jugador2={jugador2} setIcono={setIcono} />
                        <Jugadores jugador1={jugador1} jugador2={jugador2} />
                    </div>
                ) : (

                    <div className='pagina'>
                        <div>
                            <div className="Plantilla">
                                <div>
                                    Ingrese nombre jugador X:
                                    <input type="text" id='jugador1' onChange={definirJugador1} />
                                </div>
                                <div>
                                    Ingrese nombre jugador O:
                                    <input type="text" id='jugador2' onChange={definirJugador2} />
                                </div>
                            </div>
                            <div className='botones'>
                                <h2>Cual Jugador Empieza:</h2>
                                <button className='X' onClick={() => setIcono("X")}>X</button>
                                <button className='O' onClick={() => setIcono("O")}>O</button>
                            </div>

                        </div>

                    </div>
                )
            }
        </>

    )
}

export default App;