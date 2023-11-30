import React from "react";

export default function DiretaFilho(props) {

    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <div>{props.nerd ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}