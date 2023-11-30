import { numberReducer } from "./number"
import { userReducer } from "./user"
/**
 * Desafio: Fazer outra ação para multiplicar por 7,
 * dividir o número atual por 25, fazer um parseInt e
 * adicionar um número qualquer
 */

/**
 * pega o estado atual e para cada ação que vai acontecendo
 * vai evoluindo o estado alterando algum atributo
 */

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}