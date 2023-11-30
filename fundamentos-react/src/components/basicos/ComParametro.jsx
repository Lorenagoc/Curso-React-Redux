import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaArredondada = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong> tem nota <strong>{notaArredondada}</strong> e esta <strong>{status}</strong>
            </p>
        </div>
    )
}