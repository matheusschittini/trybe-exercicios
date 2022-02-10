// 4.Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50;

// Estruturando a lógica:
// Um número é primo se ele é divisível por ele mesmo e por um (somomente), então o número de divisores do número é 2

let maiorNumeroPrimo = 0;

for (let numero = 0; numero <= 50; numero += 1) {
  let ehPrimo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor == 0) {
      ehPrimo = false;
    }
  }
  if (ehPrimo) {
    maiorNumeroPrimo = numero;
  }
}

console.log(maiorNumeroPrimo);