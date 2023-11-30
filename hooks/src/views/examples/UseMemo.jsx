import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(num1, num2) {
    const future = Date.now() + 1500
    while (Date.now() < future) { } // espera
    return num1 + num2
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    // const result = sum(n1, n2) -> n3 é afetado

    /* Uma forma de resolver o problema de n2 ser afetado pela função sum: 
    
    const [result, setResult] = useState(0)

    só chama soma quando os valores corretos forem modificados

    useEffect(function () {
        setResult(sum(n1, n2))
    }, [n1, n2]) */

    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))} />
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))} />
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))} />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
