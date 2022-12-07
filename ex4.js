// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let diaSemana = parseInt(prompt("digite o dia da semana de 1 a 7"))
switch (diaSemana) {
    case 1:
        document.write("domingo")
        break;
    case 2:
        document.write("segunda feira")
        break
    case 3:
        document.write("terça feira")
        break
    case 4:
        document.write("quarta feira")
        break
    case 5:
        document.write("quinta feira")
        break
    case 6:
        document.write("sexta feira")
        break
    case 6:
        document.write("sabado")
        break            
    default:
        document.write("numero invalido")
        break;
}