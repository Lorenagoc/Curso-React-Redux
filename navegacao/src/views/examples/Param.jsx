import React from "react";
import { useParams } from "react-router-dom";

export default function Param(props) {
    const { id } = useParams()
    return (
        <div className="Param">
            <h1>Parâmetros</h1>
            <h2>Valor: {id}</h2>
        </div>
    )
}