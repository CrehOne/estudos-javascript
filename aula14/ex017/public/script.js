function calcular() {
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Por favor, digite um número');
    }
    else {
        var n = Number(num.value);
        var c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            var item = document.createElement('option');
            item.text = "".concat(n, " x ").concat(c, " = ").concat(n * c);
            tab.value = "tab".concat(c);
            tab.appendChild(item);
            c++;
        }
    }
}
