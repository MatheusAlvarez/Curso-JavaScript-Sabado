// Uma loja deseja criar um programa para calcular o 
// desconto de seus clientes de acordo com o valor total da compra.

// O programa deve receber o valor da compra e aplicar as seguintes regras:
// Se a compra for maior ou igual a R$ 200, calcular um desconto de 20%.
// Se a compra for maior ou igual a R$ 100, calcular um desconto de 10%.
// Se a compra for menor que R$ 100, não haverá desconto.

// Mostre o valor do desconto e o valor final a pagar

let valorInicial = 500
let desconto
let valorFinal

if(valorInicial >= 200){
    
    desconto = valorInicial * 0.20   
    valorFinal = valorInicial - desconto

} else if(valorInicial >= 100){
    desconto = valorInicial * 0.10   
    valorFinal = valorInicial - desconto

} else{
    desconto = 0
    valorFinal = valorInicial - desconto
}
