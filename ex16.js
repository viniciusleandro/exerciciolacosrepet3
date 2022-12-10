const anoAtual = 2022;
let anoNascimento = parseInt(prompt('Digite seu ano de nascimento'));
let idade = anoAtual - anoNascimento;

if(idade >= 16){
    document.write('Podera votar esse ano')
}else{
    document.write('Não podera votar esse ano')
}
