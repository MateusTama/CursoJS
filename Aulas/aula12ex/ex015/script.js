function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('nasc')
    var resposta = window.document.querySelector('div#resposta')
    // Micro validação (Se a pessoa nãod digitou nada ou se o ano digitado é maior que o ano atual)
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert("Verifique os dados preenchidos")
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - nasc.value
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade < 12) {
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            gen = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        resposta.innerHTML = `Detectamos ${gen} com ${idade} anos`
        resposta.appendChild(img)
    }
}