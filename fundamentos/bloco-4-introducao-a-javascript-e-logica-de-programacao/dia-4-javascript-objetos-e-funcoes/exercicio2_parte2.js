// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValorArray(array){
    let maiorValor = array[0];
    for (index=0; index < array.length; index +=1){
        if (array[index] > maiorValor){
            maiorValor = array[index];
        }
    }
    for(let index2 in array){
        if(array[index2] == maiorValor){
            return index2;
        }
    }
}
console.log(maiorValorArray([0,1,9,4,5,3,88]));