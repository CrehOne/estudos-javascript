function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var ano = Number(txtano.value)
    var resultado = document.getElementById('res')
    
    if (txtano.value.length == 0 || ano > anoAtual) {
    alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'imagens/homem-crianca.png')
                //criança
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/homem-jovem.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
                //adulto
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.png')
                //idoso
            }
            
        } else {
            genero = 'Mulher'
            if (sexo[1].checked) {
                genero = 'Mulher'
                if (idade >=0 && idade < 12) {
                    img.setAttribute('src', 'imagens/mulher-crianca.png')
                    //criança
                } else if (idade < 20) {
                    img.setAttribute('src', 'imagens/mulher-jovem.png')
                    //jovem
                } else if (idade < 50) {
                    img.setAttribute('src', 'imagens/mulher-adulto.png')
                    //adulto
                } else {
                    img.setAttribute('src', 'imagens/mulher-idoso.png')
                    //idoso
                }
            }
        }
        resultado.style.textAlign ='center'
        resultado.innerHTML = `${genero} de ${idade} anos.<br>`
        resultado.appendChild(img)
    }
}