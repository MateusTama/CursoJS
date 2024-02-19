// length = não tem ()
let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor possui ${num.length} posições`)
console.log(num[0])
let pos = num.indexOf(1)
if (pos == -1) {
    console.log("Número não encontrado")
} else {
    console.log("O número está na posicão:", pos)
}