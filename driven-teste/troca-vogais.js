function trocaVogais(string) {
    const vogais = ["a", "e", "i", "o", "u"];
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            resultado += "1";
        } else {
            resultado += string[i];
        }
    }
    return resultado;
}
