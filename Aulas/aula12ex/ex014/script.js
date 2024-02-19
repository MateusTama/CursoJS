function carregar() {
    var data = new Date
    var hora = data.getHours()
    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    mensagem.innerText = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#ffca4b'
    } else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#ba4f01'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#07041f'
    }
}
