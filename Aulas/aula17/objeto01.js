let amigo = {nome:"José", 
sexo:"M", 
peso:85.4, 
engordar(p = 0){
    console.log("Engordou!")
    // Referencia o atributo do objeto
    this.peso += p
}}

// Array também é considerado object
console.log(typeof(amigo))

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)