// Operadores Aritméticos
let a = 2
let b = 9
console.log("--- Operadores Aritméticos ---")
console.log(a + b) // Soma +
console.log(a - b) // Subtração -
console.log(a * b) // Multiplicação *
console.log(a / b) // Divisão /
console.log(a % b) // Módulo %
console.log(a ** b) // Potência **

// Operadores De Comparação
console.log("--- Operadores De Comparação ---")
let c = 8
let d = "8"

console.log(c == d) // Igual (valor) ==
console.log(c === d) // Igual (valor e tipo) ===
console.log(c != d) // Diferente !=
console.log(c !== d) // Diferente !==
console.log(c > d) // Maior >
console.log(c >= d) // Maior >=
console.log(c < d) // Menor <
console.log(c <= d) // Menor <=

// Operadores Lógicos
console.log("--- Operadores Lógicos ---")
let chocolate = true
let pipoca = false
console.log(chocolate == true && pipoca == true) // AND &&

let elseve = true
let siage = true
console.log(elseve == true || siage == true) // OR ||

let logado = true
console.log(logado == false)
console.log(!logado)

// Operadores De Atribuição
console.log("-- Operadores De Atribuição ---")
let pontos = 10

// pontos = pontos + 5
// pontos += 5

// pontos = pontos - 5
// pontos -= 5

// pontos = pontos * 5
// pontos *= 5

// pontos = pontos / 5
// pontos /= 5

pontos = pontos / 2
pontos /= 2

console.log(pontos)
