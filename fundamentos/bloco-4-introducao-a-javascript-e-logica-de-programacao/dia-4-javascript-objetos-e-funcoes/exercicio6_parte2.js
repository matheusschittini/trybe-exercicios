// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaTudo(numero){
    let soma =0;
    for(let index=0; index <= numero; index+=1){
        soma += index;
    }

    return soma;
}

console.log(somaTudo(3));