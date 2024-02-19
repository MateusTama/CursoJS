function tabuada() {
    // Pegamos o numero digitado
    let num = window.document.getElementById('num').value
    // Pegamos o atributo select
    let select = window.document.getElementById('tabuada')
    // Checamos se foi digitado algum número
    if (num.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        // Se for digitado transformamos a str em number
        let numero = Number(num)
        // Limpar todos os options do select
        select.innerHTML = ''
        for (let contador = 0; contador <= 10; contador++) {
            // Criamos um elemento option
            let item = document.createElement('option')
            // Adicionamos texto ao option
            item.text = `${numero} x ${contador} = ${numero*contador}`
            // Adicionamos o value ao option
            item.value = `option${contador}`
            // Colocamos o option como filho do select
            select.appendChild(item)
        }
    }
}