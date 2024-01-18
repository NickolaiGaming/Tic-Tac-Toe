import React, { useState} from 'react';
import "./css/siguientejugador.css"

const SiguienteJugador = (props) => {

    return (
        <>
        <div className="siguientejugador">
               <h1>Siguiente jugador es {props.icono}</h1>
        </div>
        </>
    )

}

export default SiguienteJugador