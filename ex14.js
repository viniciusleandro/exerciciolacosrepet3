// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor
let soma = 0
numero = 0
while (soma < 500) {
    numero = parseFloat(prompt("digite um numero"))
    soma = soma + (numero * 3)
}
document.write(` o ultimo valor digitado foi ${numero}`)