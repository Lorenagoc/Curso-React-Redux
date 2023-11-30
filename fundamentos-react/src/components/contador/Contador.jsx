import PassoForm from './PassoForm'
import Botoes from './Botoes'
import Display from './Display'
import './Contador.css'
import React from "react";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroInicial || 5
    }

    /*constructor(props) {
            super(props)
            this.state = {
                numero: props.numeroInicial
            }
    }*/

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
            </div>
        )
    }
}