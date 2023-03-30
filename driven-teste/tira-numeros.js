function tiraNumeros(string) {
    let letras = ''
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            letras += string[i]
        }
    }
    return letras
}
