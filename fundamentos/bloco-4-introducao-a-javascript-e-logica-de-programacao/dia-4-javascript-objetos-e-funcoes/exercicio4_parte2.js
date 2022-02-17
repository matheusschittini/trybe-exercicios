// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNomeArray(array){
    let maiorPalavra=[0];
    for (let palavra of array){
        if (palavra.length > maiorPalavra.length){
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}

console.log(maiorNomeArray(['matheus','julio','paralelepipedo','casa']));