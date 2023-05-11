function gerar() {
    var tabuada = document.getElementById(`itabuada`)
    var num = document.getElementById(`numero`)

    if (num.value.length == 0) {
        window.alert(`[ERRO] Digite um número`)

    }

    else {
        var n1 = Number(num.value)
        var n2 = 1

        tabuada.innerHTML = ``

        for (n2; n2 <= 10; n2++) {
            var item = document.createElement(`option`)
            item.innerHTML = `${n1} x ${n2} = ${n1*n2}`
            tabuada.appendChild(item)
        }

    }
}