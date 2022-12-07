// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

function primo() {
    let numero = Number.parseInt(prompt('Digite um número:'))
    let divisores = 0;
    for (let count = 1; count <= numero; count++)
      if (numero % count == 0)
        divisores++;
  
    if (divisores == 2)
      document.write('É primo');
    else
      document.write('Não é primo');
  }
  
  console.log(primo())