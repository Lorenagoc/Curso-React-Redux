/**
 * Rodando npm run build e depois npm start (modo produção) o conteúdo passa a ser estático,
 * ou seja, um número aleatório é gerado uma única vez.
 */

import Layout from "../components/Layout"

/* export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
} */

export async function getStaticProps() {
    const res = await fetch('http://files.cod3r.com.br/curso-react/estados.json')
    const estados = await res.json()
    return {
        props: {
            estados,
        }
    }
}

/* export default function Estatico(props) {

    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
} */

export default function Estatico({ estados }) {
    return (
        <Layout titulo="Conteúdo Estático">
            <ul>
                {estados.map((estado) => (
                    <li key={estado.nome}>
                        <h3>{estado.nome} - {estado.sigla}</h3>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}