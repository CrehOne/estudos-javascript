function calcular() {
    let num = document.getElementById('txtn') as HTMLInputElement
    let tab = document.getElementById('seltab') as HTMLInputElement
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}