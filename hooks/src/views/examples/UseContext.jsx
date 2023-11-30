import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { DataContext } from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const currentContext = useContext(DataContext)

    function addNumber(n) {
        currentContext.setState({
            ...currentContext.state,
            number: currentContext.state.number + n
        })
    }

    const { number, text, setNumber } = useContext(AppContext)

    /*     useEffect(function() {
            if(number > 125) {
                setText('Eita!')
            }
        }, [number]) */

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="center">{currentContext.state.text}</span>
                <span className="center">{currentContext.state.number}</span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
