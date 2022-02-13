// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaDeXadrez = 'Cavalo'.toLowerCase();
if (pecaDeXadrez == 'bispo'){
    console.log('Anda na diagonal');
} else if (pecaDeXadrez == 'peao'){
    console.log('Anda pra frente verticalmente (na primeira rodada podem andar 2 quadrados');
} else if (pecaDeXadrez == 'torre'){
    console.log('Anda na vertical e horizontal');
} else if (pecaDeXadrez == 'rainha'){
    console.log('Diagonal, horizontal e vertical');
} else if (pecaDeXadrez == 'rei'){
    console.log('Uma casa apenas para qualquer direção');
} else if (pecaDeXadrez == 'cavalo'){
    console.log('Anda em L');
} else{
    console.log('Peça inválida!')
}