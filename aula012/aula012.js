var agora = new Date()
var horas = agora.getHours()
console.log(`Esse é o hórario atual ${horas} horas`)

if (horas >= 0 && horas <= 6){
    console.log(`Boa Madrugada!`)
} else if(horas > 6 && horas <= 12) {
    console.log(`Bom dia!`)
}
else if (horas > 12 && horas <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}




