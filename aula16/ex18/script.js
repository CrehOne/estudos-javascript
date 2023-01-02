let tnum = document.getElementById('txtn')
let lista = []
let tabela = document.getElementById('tabela')
let resultado = document.getElementById('resultado')

function adicionar() {
    let num = Number(tnum.value)
    if (num < 1 || num > 100 || lista.indexOf(num) != -1) {
        alert('Número inválido ou já existente na lista')
    } else {
        lista.push(num)
        let item = document.createElement('option')
            item.text = `${num} adicionado à lista`
            tabela.appendChild(item)
    }
    tnum.focus()
    tnum.value = ''
    tnum.innerHTML =''
}

function somar() {
    let soma = 0
    for (let i in lista) {
        soma += lista[i]
    }
    return soma
}

function finalizar() {
    if (lista.length == 0) {
        alert('Adicione os valores antes de finalizar!')
    } else {
        lista.sort()
        resultado.innerHTML += 
        `Ao todo temos ${lista.length} valores informados<br>
        O menor valor da lista é: ${lista[0]}<br>
        O maior valor da lista é: ${lista[lista.length - 1]}<br>
        A soma dos itens é: ${somar()}<br>
        A média dos itens é: ${somar()/lista.length}<br>`
    }    
}




