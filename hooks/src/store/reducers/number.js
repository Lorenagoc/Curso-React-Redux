
/**
 * Desafio: Fazer outra ação para multiplicar por 7,
 * dividir o número atual por 25, fazer um parseInt e
 * adicionar um número qualquer
 */

/**
 * pega o estado atual e para cada ação que vai acontecendo
 * vai evoluindo o estado alterando algum atributo
 */

 export function numberReducer(state, action) {
    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'addNumber':
            const n = action.payload
            // return { ...state, number: state.number + action.payload }
            return { ...state, number: state.number + n }
        default:
            return state
    }
}