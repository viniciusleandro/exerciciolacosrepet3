// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

let idade = parseInt(prompt("digite a sua idade"))
let habilitacao = prompt("voce possui habilitacao? sim ou não")
if (idade >= 18 && habilitacao == "sim") {
    document.write("voce pode dirigir")
} else {
    document.write("voce nao pode dirigir")
}