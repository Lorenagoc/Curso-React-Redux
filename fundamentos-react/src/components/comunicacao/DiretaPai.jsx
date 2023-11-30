import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props) {

    return (
        <div>
            <DiretaFilho nome="Gustavo" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gisele" idade={17} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Giovanna" idade={14} nerd={true}></DiretaFilho>
        </div>
    )
}