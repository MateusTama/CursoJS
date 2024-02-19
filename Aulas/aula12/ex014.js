var agora = new Date()
var dia_semana = agora.getDay()

/*

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

*/

console.log(dia_semana)

// Sempre colocar o break, senão o switch executa todos os cases (a partir da expressão).
// Switch = não é possível testar intervalos 
// Apenas números inteiros e caracteres
switch(dia_semana) {
    // Caso o dia for 0
    case 0:
        console.log('Domingo')
        break
    // Caso o dia for 1
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3: 
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log("Erro. Dia inválido")
        break
}