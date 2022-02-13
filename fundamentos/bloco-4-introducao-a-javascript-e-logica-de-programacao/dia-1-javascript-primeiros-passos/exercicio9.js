// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

let num1 =6;
let num2 =2;
let num3 =4;
let content;
if  (num1 % 2 !=0 || num2 % 2 != 0 || num3 % 2 !=0){
    content = true;
} else {
    content = false;
}
console.log(content)