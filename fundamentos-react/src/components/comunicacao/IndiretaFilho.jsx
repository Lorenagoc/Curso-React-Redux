import React from "react";

export default function IndiretaFilho(props) {
    const idadeMax = 70
    const idadeMin = 50
    const gerarIdade = () => parseInt(Math.random() * (idadeMax - idadeMin)) + idadeMin
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>

            <button onClick={ () => { props.quandoClicar('João', gerarIdade(), gerarNerd()) }}>
                Fonecer Informações
            </button>
        </div>
    )
}