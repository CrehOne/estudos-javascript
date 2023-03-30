function padraoDriven (n) {
  let driven = ['a','e','b','i','c','o','d','u','e','a','f','e','g','i','h']
  let resultado = []

  for(let i = 0; i < n; i++) {
    resultado.push(driven[i])
  }
  console.log (resultado)
}

padraoDriven(14)
