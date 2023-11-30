import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function calcImparOuPar(num) {
    const n = parseInt(num)
    if (n % 2 === 0) return 0
    else return 1
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [status, setStatus] = useState(1)
    const [imparOuPar, setImparOuPar] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Eita!"
        }
    }, [fatorial])

    useEffect(function() {
        setImparOuPar(calcImparOuPar(status))
    }, [status])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{imparOuPar === 0 ? 'Par' : 'Ímpar'}</span>
                </div>
                <input type="number" className='input' value={status} onChange={e => setStatus(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
