// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os 
//ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let degreeAngleA = -9;
let degreeAngleB = 120;
let degreeAngleC = 30;
let content;
let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
if ( degreeAngleA < 0 || degreeAngleB < 0 || degreeAngleC <0){
    console.log("ERRO");
}else if (sumOfAngles == 180){
    content = true;
    console.log(content);
}else{
    content = false;
    console.log(content);
}