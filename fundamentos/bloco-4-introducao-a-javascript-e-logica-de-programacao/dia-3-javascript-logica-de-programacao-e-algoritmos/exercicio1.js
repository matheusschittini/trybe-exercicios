// 1.O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal "!"
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
dezFatorial = 1;
for(let index = 10 ; index >=1 ; index = index -1 ){
    dezFatorial = dezFatorial * index;
}
console.log('10! é igual a: ' + dezFatorial)