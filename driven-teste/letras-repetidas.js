function letrasRepetidas(string) {
	let resultado = []
    
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1;j < string.length; j++) {
            if (string[i] === string[j]) {
                resultado.push(string[i])
            } 
        }
    }
    console.log(resultado)
}

letrasRepetidas('ovo')