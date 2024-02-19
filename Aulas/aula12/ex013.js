var hora = 7
console.log(`Agora são: ${hora} horas.`)
if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else if (hora <= 24) {
    console.log("Boa noite!")
}