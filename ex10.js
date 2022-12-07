let sexo = prompt('Digite o sexo [1]Masculino ou [2]Feminino' )
        switch (sexo) 
        {
            case '1':
                let alturaMasc = Number.parseFloat(prompt('Digite a altura:'))
                let pesoIdealMasc = ((72.7 * alturaMasc)-58)
                document.write(pesoIdealMasc)
                break;
            case '2':
                let alturaFem = Number.parseFloat(prompt('Digite a altura:'))
                let pesoIdealFem = ((62.1 * alturaFem)-44.7)
                document.write(pesoIdealFem)
                break;
            default:
                    document.write('Digite um valor válido: ')
                    break;
        }