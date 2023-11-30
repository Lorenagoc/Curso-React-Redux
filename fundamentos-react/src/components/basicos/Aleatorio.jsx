import React from "react";

export default function Aleatorio(props) {
/*     const min = props.min
    const max = props.max */
    
    const { min, max } = props
    const aleatorio = parseInt(Math.floor((Math.random() * (max - min)) + min))
    return (
        <div>
            <h2>Número aleatório entre {min} e {max}</h2>
            <p>
                O número sorteado é: <strong>{aleatorio}</strong>
            </p>
        </div>
    )
}