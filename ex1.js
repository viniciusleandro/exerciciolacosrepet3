// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

let idade = parseInt(prompt("digite a sua idade"))

if (idade >= 18) {
    document.write("voce pode dirigir")
} else {
    document.write("voce nao pode dirigir")
}