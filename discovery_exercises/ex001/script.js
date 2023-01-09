


function convert() {
    let tgrade = document.querySelector("#tgrade")
    let result = document.querySelector("#result")
    let grade = Number(tgrade.value)
    result.innerHTML = ""

    if (grade < 0 || grade > 100){
        alert("Digite uma nota válida de 0 a 100.")
    } else if (grade >= 90) {
        result.innerHTML += "A"
    } else if (grade >= 80) {
        result.innerHTML += "B"
    } else if (grade >= 70) {
        result.innerHTML += "C"
    } else if (grade >= 60) {
        result.innerHTML += "D"
    } else {
        result.innerHTML += "F"
    }
    tgrade.focus()
    tgrade.innerHTML = ""
    tgrade.value = ""
}

