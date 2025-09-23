var idade = 17
console.log(`Sua idade ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota!`)
} else if ( idade < 18 || idade > 67 ){
    console.log(`Voto opcicional!`)
}

else {
    console.log(`Voto obrigatótio!`)
}
