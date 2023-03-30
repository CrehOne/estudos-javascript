function somaAteMeta(inicio, meta) {
    let soma = 0
    let resultado = []
    for (let i = inicio + 1; soma < meta; i++) {
        resultado.push(i)
        soma += i
    }
    return (resultado)
}
