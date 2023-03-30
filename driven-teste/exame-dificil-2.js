function organizaSelos (num) {
  let contador = 0

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        contador++
    }
  }
  console.log(contador)
}

organizaSelos(8)