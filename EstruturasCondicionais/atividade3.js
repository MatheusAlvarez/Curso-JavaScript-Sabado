// Crie um programa que receba a idade de uma pessoa e 
// verifique se ela é criança, adolescente ou adulta.

// O programa deve seguir estas regras:
// Menor de 12 anos: criança.
// De 12 a 17 anos: adolescente.
// 18 anos ou mais: adulto.

let idade = 20

if(idade < 12){
    console.log("Criança")
} else if(idade <= 17){
    console.log("Adolescente")
} else{
    console.log("Adulto")
}