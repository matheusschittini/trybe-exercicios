// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValorArray(array){
    let indexMenor = 0;
    for (let index in array){
        if (array[indexMenor] > array [index]){
            indexMenor = index;
        }
    }
        return indexMenor;
}
console.log(menorValorArray([1,2,-5,6,9,15]));
