import { collection } from "firebase/firestore";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },

        fromFirestore: (snapshot, options) => {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }

    // terminar depois...
    private colecao() {

    }
}