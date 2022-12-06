let idade = parseInt(prompt("digite a sua idade"))
let habilitacao = prompt("voce possui habilitacao? sim ou não")
if (idade >= 18 && habilitacao == "sim") {
    document.write("voce pode dirigir")
} else {
    document.write("voce nao pode dirigir")
}