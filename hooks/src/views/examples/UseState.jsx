import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    /* 0 é o número inicial do contador */
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount(count - 1)} className="btn">-1</button>
                    <button onClick={() => setCount(count + 1)} className="btn">+1</button>
                    <button onClick={() => setCount(current => current + 100)} className="btn">+100</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default UseState
