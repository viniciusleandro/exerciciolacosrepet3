let total = 0;

  total = parseInt(
    prompt("digite a quantidade de eleitores de um municipio: ")
  );
  let quantidadedevotosbrancos = parseInt(prompt("digite a quantidade de votos brancos : "));
  let quantidadedevotosnulos = parseInt(prompt("digite a quantidade de votos nulos :"));

  let porcentagemvotosbrancos = (quantidadedevotosbrancos / total) * 100;
  let porcentagemvotosnulos = (quantidadedevotosnulos / total) * 100;
  let porcentagemvotosvalido = 100 - (porcentagemvotosnulos+porcentagemvotosbrancos);

  document.write(
    "a porcentagem de votos brancos corresponde a :",
    porcentagemvotosbrancos
  );
  document.write(
    "</br> a porcentagem de votos nulos corresponde a :",
    porcentagemvotosnulos
  );
  document.write(
    "</br> a porcentagem de votos validos corresponde a :",
    porcentagemvotosvalido
  );