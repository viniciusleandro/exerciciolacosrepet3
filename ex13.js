// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = parseInt(prompt("digite o numero"))
for (let i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
        document.write(i + "<br>")
    }
    
}