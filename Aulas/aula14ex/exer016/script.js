function contar() {
    let init = window.document.getElementById('init')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let resposta = window.document.getElementById('resposta')
    if (init.value.length == 0 || fim.value.length ==  0) {
        alert("Caixa vazia")
    } else {
        // resposta.innerText = ''
        let passon = Number(passo.value)
        if (Number(passo.value) <= 0 || passo.value.length == 0) {
            alert('PASSO INVÁLIDO. CONSIDERANDO COMO 1')
            passon = 1
        }
        if (Number(init.value) < Number(fim.value)) {
            for (let initn=Number(init.value); initn <= Number(fim.value); initn+=passon) {
                resposta.innerText += `${initn} 👉 ` // ou /u{1F449}
            }
        } else {
            for (let initn=Number(init.value); initn >= Number(fim.value); initn-=passon) {
                resposta.innerText += `${initn} 👉 `
            }
        }
        resposta.innerText += '🏁'
    }
}