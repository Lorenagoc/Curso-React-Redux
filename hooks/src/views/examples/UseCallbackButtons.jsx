import React from "react";

const UseCallbackButtons = (props) => {
    return (
        <div>
            <button className="btn" onClick={() => props.increment(6)}>+6</button>
            <button className="btn" onClick={() => props.increment(12)}>+12</button>
            <button className="btn" onClick={() => props.increment(18)}>+18</button>
        </div>
    )
}

/* Os componentes são renderizados todas as vezes que um botão é clicado

export default React.memo(UseCallbackButtons)

Para resolver usa-se React.memo que cria um cast e os componentes são renderizados
apenas se a propriedades mudarem

*/

export default React.memo(UseCallbackButtons)