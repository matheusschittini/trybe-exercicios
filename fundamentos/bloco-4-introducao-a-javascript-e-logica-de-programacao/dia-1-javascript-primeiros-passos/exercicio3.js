// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 4;
const b = 5;
const c = 1;
if (a>b && a>c){
    console.log('O maior número é: ' + a);
} else if (b>a && b>c){
    console.log('O maior número é: ' + b);
} else {
    console.log('O maior número é: ' + c)
}