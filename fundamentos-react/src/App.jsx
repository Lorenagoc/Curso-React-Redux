/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";

import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#8f1429">
                <Mega qtdeInicial={10}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982595">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo></UsuarioInfo>
                {/* <UsuarioInfo usuario={{ nome: 'Fernando' }}/> */}
                {/* <UsuarioInfo usuario={{ email: 'Fernando@email.com' }}/> */}
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#546546">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" sobrenome=""></FamiliaMembro>
                    <FamiliaMembro nome="Ana" sobrenome=""></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo" sobrenome=""></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Lorena"
                    nota="9.3"
                />
            </Card>

            <Card titulo=" #01 - Primeiro Componte" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>