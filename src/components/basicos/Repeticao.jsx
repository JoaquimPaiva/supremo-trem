import React from 'react'

import Produtos from '/home/kim/segundo/src/data/produtos'

export default props => {

    function getProdutosListItem() {
        return Produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} -> € {prod.preco}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}