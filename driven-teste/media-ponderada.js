function mediaPonderada(listaValores, listaPesos){
    let pesos = 0
    let valores = 0
    for (let j = 0; j < listaPesos.length; j++){
        pesos += listaPesos[j]
    }
    for (let i =0; i < listaValores.length; i++) {
        valores += listaValores[i] * listaPesos[i]
    }
    console.log(valores / pesos)
    
}

mediaPonderada([5,8,10], [1,2,3])