var idade = 20
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Não e permitido Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
}