import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    /* setCount é criado apenas uma única vez, então o mesmo parâmetro é passado
    e o componente é renderizado só uma vez, pois é criado um cash com React.memo*/

    const increment = useCallback(function (inc) {
        setCount(current => current + inc)
    }, [setCount])

    /* function increment(inc) {
        return setCount(count + inc)
    } */

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons increment={increment} />
            </div>
        </div>
    )
}

export default UseCallback
