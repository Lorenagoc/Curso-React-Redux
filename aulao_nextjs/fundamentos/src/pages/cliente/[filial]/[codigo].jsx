import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

/**
 * Navegação dinâmica: Colocar o nome do arquivo com o nome do parâmetro que queremos receber
 * e envolver entre colchetes.
 * Usando router acessamos o parâmetro
 */

export default function ClienteProCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}