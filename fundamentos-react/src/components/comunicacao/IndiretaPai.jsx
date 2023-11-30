import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function DiretaPai(props) {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [isNerd, setIsNerd] = useState(false)
    
    function fornecerInformacoes(nome, idade, isNerd) {
        setNome(nome)
        setIdade(idade)
        setIsNerd(isNerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}