// 2. Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente:

let word = 'tryber';
let palavraReversa = '';
palavraReversa = word.split('').reverse().join('');
console.log(palavraReversa)

// A função split corta a palavra e coloca essas partes em um array, reverse inverte os itens desse array e join junta todos os elementos
// desse array em uma string e retorna ela