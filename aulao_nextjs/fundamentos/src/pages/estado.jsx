import { useState } from 'react'
import Layout from '../components/Layout'

export default function Estado() {
    const [number, setNumber] = useState(0)

    function incrementar() {
        setNumber(number + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>
                {number}
            </div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}