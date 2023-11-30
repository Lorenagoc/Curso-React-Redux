import React from "react";
import If, { Else } from "./if";

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}
    return (
        <div>
{/*             <If test={usuario && usuario.nome}>
                Seja bem-vindo <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem-vindo <strong>Meu caro</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem-vindo <strong>{usuario.nome}</strong>.
                <Else>
                    Seja bem-vindo <strong>meu caro</strong>.
                </Else>
            </If>
        </div>
    )
}