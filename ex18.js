let price = parseFloat(prompt('Digite o preço da compra: '))
let valorParcela = parseInt(prompt('Digite a quantidade de parcelas'))

if(valorParcela== 1){
    price = price - (price/100 *2.5)
     console.log('O valor a ser pago é '+ price)
}
else if(valorParcela>=2 && valorParcela<=5){
     console.log('O valor a ser pago é '+ price)
}
else if(valorParcela>=6 && valorParcela<=10){
    price = price + (price/100 *6)
     console.log('O valor a ser pago é '+ price)
} else if(valorParcela>=11 && valorParcela<=15){
     console.log('o valor a ser pago é '+ (price = price + (price/100 *13)) )
} else{
    console.log('Digite um valor válido')
}

