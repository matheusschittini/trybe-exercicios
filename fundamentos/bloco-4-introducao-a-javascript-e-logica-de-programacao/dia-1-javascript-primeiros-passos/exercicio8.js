// 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

let num1 =5;
let num2 =9;
let num3 =7;
let content;
if  (num1 % 2 ==0 || num2 % 2 == 0 || num3 % 2 ==0){
    content = true;
} else {
    content = false;
}
console.log(content);