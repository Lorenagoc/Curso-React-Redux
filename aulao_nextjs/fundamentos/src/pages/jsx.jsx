import Layout from "../components/Layout"

function Jsx() {

    const titulo = <h1> Jsx é um conceito central </h1>
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
            </div>
        </Layout>
    )
}

export default Jsx