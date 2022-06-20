import React from "react";
import PageHeader from "../template/pageHeader";

export default function About(props) {
    return (
        <div>
            <PageHeader nome='Sobre' small='Nós'></PageHeader>
            <h2>Nossa História</h2>
            <p>Nossa histórica começa em 1986, quando...</p>
            <h2>Missão e Visão</h2>
            <p>Nossa missão é...</p>
            <h2>Imprensa</h2>
            <p>...</p>
        </div>
    )
}