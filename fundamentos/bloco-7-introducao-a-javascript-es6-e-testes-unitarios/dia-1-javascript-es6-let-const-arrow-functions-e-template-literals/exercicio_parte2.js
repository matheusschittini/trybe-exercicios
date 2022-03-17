// 1) Crie uma função que receba um número e retorne seu fatorial.

 const calculaFatorial = numero => {
    if (numero < 0) {
        return `O número precisa ser maior que 0`
    } else if (numero == 0) {
        return `o fatorial de 0 é igual a 1`
    } else {
        let fatorial = 1;
        for(let index = 2; index <= numero; index+=1){
            fatorial = fatorial * index;
        }
    return `O fatorial de ${numero} é igual a ${fatorial}`;
    }
}

console.log(calculaFatorial(3));

// 2) Crie uma função que receba uma frase e retorne qual a maior palavra.

const retornaMaiorPalavra = frase => {
    let arrayPalavras = frase.split(' ');
    let comprimentoMaximo = 0;
    let maiorPalavra = '';
    for (const word of arrayPalavras){
        if (word.length > comprimentoMaximo) {
            comprimentoMaximo = word.length;
            maiorPalavra = word;
        }

    }
    return maiorPalavra;
}
console.log(retornaMaiorPalavra('Amar e mudar as coisas me interessa mais'))


