var idade = 63
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')
}