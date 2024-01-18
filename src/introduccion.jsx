import React, { useState} from 'react';


const Introduccion = () => {

    return (
        <div>
        <div className="Plantilla">
            <div>
                Ingrese nombre jugador 1:
                <input type="text" id='jugador1' />
            </div>
            <div>
                Ingrese nombre jugador 2:
                <input type="text" id='jugador2' />
            </div>            
        </div>
        <button id='sudmit'></button>
        </div>
    )

}

export default Introduccion