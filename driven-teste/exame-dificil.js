function sequenciaDriven(number){
    let sequencia = [0, 1 ,2]
    let proximo = 3
    
    while (proximo <= number) {
        sequencia.push(proximo)
        proximo = sequencia[sequencia.length -1] + sequencia[sequencia.length -2] + sequencia[sequencia.length -3]

    }
    console.log(sequencia)
  }

  sequenciaDriven(18)