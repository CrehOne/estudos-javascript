function contaLetras(string, letra) {
	let palavra = string
	let total = 0
	for (let i = 0; i < palavra.length; i++) {
		if (letra == palavra[i]) {
			total++
		}
	}
	return total
}
