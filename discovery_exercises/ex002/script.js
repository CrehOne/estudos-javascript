let txtn = document.querySelector("#txtn")
let result = document.querySelector("#result")
let selDespesa = document.querySelector("#seldespesa")
let selReceita = document.querySelector("#selreceita")
let somaDes = 0
let somaRec = 0

let radio = document.getElementsByName("radiodr")
let valores = {
    despesas: [],
    receitas: [],
}

function somar(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

function calcularDespesas() {
    let valor = Number(txtn.value)
    valores.despesas.push(valor)
    let item = document.createElement("option")
    item.text = `${valores.despesas[valores.despesas.length - 1]}`
    selDespesa.appendChild(item)
    mostrarSaldo()
}

function calcularReceitas() {
    let valor = Number(txtn.value)
    valores.receitas.push(valor)
    let item = document.createElement("option")
    item.text = `${valores.receitas[valores.receitas.length - 1]}`
    selReceita.appendChild(item)
    mostrarSaldo()
}

function mostrarSaldo() {
    let somaRec = somar(valores.receitas)
    let somaDes = somar(valores.despesas)
    let saldo = somaRec - somaDes
    result.innerHTML = `R$ ${saldo.toFixed(2)}`
    if (saldo >= 0) {
        result.classList.add('resultPos')
    } /*else {
        result.classList.remove('resultPos')
    }*/
    txtn.focus()
    txtn.value = ''
    txtn.innerHTML = ''
}    

function add() {
    somaDes = 0
    somaRec = 0
    if (radio[0].checked){
        calcularDespesas()
    } else {
        calcularReceitas()
    }
}

function validate() {
    let valor = Number(txtn.value)
    if (txtn == "" || valor <= 0) {
        alert("Valor inválido")
    } else {
        add()
    }
}

