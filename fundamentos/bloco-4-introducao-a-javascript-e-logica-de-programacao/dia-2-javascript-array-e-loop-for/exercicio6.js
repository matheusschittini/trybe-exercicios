// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
quantidadeNumerosImpares = 0;
for (let index=0 ; index<numbers.length ; index +=1){
    if (numbers[index] % 2 != 0){
        quantidadeNumerosImpares +=1;
    }
}
if (quantidadeNumerosImpares > 0){
    console.log('A quantidade de números ímpares no array é: ' + quantidadeNumerosImpares);
}else{
    console.log('Não há nenhum número ímpar no array.')
}