import React from "react";
import produtos from '../../data/produtos'

export default function TabelaProdutos(props) {

    const lista = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    R${produto.preco}
                </td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {lista}
                </tbody>
            </table>

        </div>
    )
}