// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(string){
   let palavraReversa = string.split('').reverse().join('');
    if (string === palavraReversa){
        return true;
    } else {
        return false;
    }    
}

console.log(verificaPalindromo('string'))

// Outra forma de resolver:

function verificaPalindromo2(string2){
    for (let index in string2){
        if(string2[index] != string2[(string2.length-1)-index]){
             return false;
         } else {
             return true;
         }
    }
}

console.log(verificaPalindromo2('string2'));

