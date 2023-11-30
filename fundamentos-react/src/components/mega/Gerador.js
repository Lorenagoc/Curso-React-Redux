export default function Gerador(qtde) {
    let arr = []
    for (let i = 0; i < qtde; i++) {
        arr.push(" ",parseInt((Math.random() * 59) + 1))
    }

    return arr
}