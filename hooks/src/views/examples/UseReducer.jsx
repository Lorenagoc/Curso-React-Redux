import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/config'
import { add2, login } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={() => add2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'mult7' })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'div25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parseInt' })}>Int</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addNumber', payload: 5 })}>+n</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
