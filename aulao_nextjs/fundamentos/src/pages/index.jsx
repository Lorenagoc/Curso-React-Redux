import Link from "next/link"
import Navegador from "../components/Navegador"

function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="estiloso" destino="/estiloso" />
            <Navegador texto="exemplo" destino="/app" cor="#9400d3" />
            <Navegador texto="jsx" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/filialAqui/codigoAqui" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="#a45b71"/>
            <Navegador texto="Integração com API #01" destino="/integracao1" cor="orange"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#D2691E"/>
        </div>
    )
}

export default Inicio