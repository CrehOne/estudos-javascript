function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 5 && hora < 12) {
        img.src = "imagens/manha.png"
        document.body.style.background = '#dacc9b'
        //bom dia
    } else if (hora >= 12 && hora < 19) {
        img.src = "imagens/tarde.png"
        document.body.style.background = '#febc66'
        //boa tarde
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = '#4a6077'
        //boa noite
    }
}
