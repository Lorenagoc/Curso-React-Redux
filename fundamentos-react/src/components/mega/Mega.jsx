import Gerador from './Gerador'
import Botoes from '../contador/Botoes'
import Display from '../contador/Display'
import './Mega.css'
import React from "react";

export default class Mega extends React.Component {

    state = {
        numero: this.props.qtdeInicial || 0,
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    decrementar = () => {
        if (this.state.numero > 1) {
            this.setState({
                numero: this.state.numero - 1
            })
        }
    }

    render() {
        return (
            <div className='Mega'>
                <h2>Sorteio Megasena</h2>
                <h5>
                    Quantidade de nº sorteados: <Display numero={this.state.numero} />
                    <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
                </h5>
                <h6>Números sorteados:</h6>
                <div className='Sorteados'>
                    <strong>{Gerador(this.state.numero)}</strong>
                </div>
            </div>
        )
    }
}