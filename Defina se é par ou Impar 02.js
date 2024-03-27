
const prompt = require ("prompt-sync")();
let num,resto;
num = prompt("Digite um numero para descobrir se é impar ou par:");
resto = num % 2;

if (resto == 0) {
    console.log("O numero" ,num + "  é par.");
} else {
    console.log("O numero" ,num + "  é impar.");
}