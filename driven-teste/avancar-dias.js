function avancarDias(dia, quantidade) {
    let semana = ['Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo']
    let diaDaSemana = semana.indexOf(dia) + quantidade
    if (diaDaSemana > 6) {
      diaDaSemana = diaDaSemana - 7
    }
    return semana[diaDaSemana]
  }
  