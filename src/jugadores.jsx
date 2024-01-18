import React from "react";
import "./css/jugadores.css"



const Jugadores = (props) => {

    return (
        
        <div className="Jugadores">
            <div className="Jugador">{props.jugador1}: X</div>
            <div className="Jugador">{props.jugador2}: O</div>
          
        </div>

        
    )

}

export default Jugadores