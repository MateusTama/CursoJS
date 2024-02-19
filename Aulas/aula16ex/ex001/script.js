// Função que adiciona um número em um array e mostra no select
let sel = window.document.getElementById('sel')
let listaNum = []
// Pegamos o número digitado
let num = window.document.getElementById('num')
// Pegando a div fim
let resposta = window.document.getElementById('fim')
function adicionar() {
    numero = Number(num.value)
    // Se o número for menor que 1 ou maior que 100 mostramos o alert
    if (numero < 1 || numero > 100) {
        alert('Número fora da faixa de valores indicada!')
    // Se não adicionar na lista de números
    } else {
        existe = listaNum.indexOf(numero)
        if (existe == -1) {
            // Limpar o finalizar
            resposta.innerHTML = ''
            // Adicionando na lista
            listaNum.push(numero)
            // Criamos o option e adicionamos no select
            let option = window.document.createElement('option')
            option.text = `Adicionado valor ${Number(numero)}`
            option.value = `valor${numero}`
            sel.appendChild(option)
        } else {
            alert("O valor já está na lista!")
        }
    }
    num.value = ''
    num.focus()
}

// Função que finaliza e mostra as informações 
// Número de itens cadastrados, o maior número informado, menor número informado, soma de todos os números e a média dos valores

function qtdNum() {
    return listaNum.length
}

function maior_num() {
    let maior = null
    for (let cont = 0; cont < listaNum.length; cont++) {
        if (listaNum[cont] > maior) {
            maior = listaNum[cont]
        }
    }
    return maior
}

function menor_numero() {
    let menor = Infinity
    for (let cont = 0; cont < listaNum.length; cont++) {
        if (listaNum[cont] < menor) {
            menor = listaNum[cont]
        }
    }
    return menor
}

function soma() {
    let somaNum = 0
    for (let valor in listaNum) {
        somaNum += listaNum[valor]
    }
    return somaNum
}

function media() {
    return soma() / qtdNum()
}

function finalizar() {
    if (listaNum.length == 0) {
        alert('Nenhum valor cadastrado!')
    } else {
        resposta.innerHTML = `<p>Ao todo, temos ${qtdNum()} números cadastrados</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior_num()}</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor_numero()}</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media()}</p>`
    }
}
