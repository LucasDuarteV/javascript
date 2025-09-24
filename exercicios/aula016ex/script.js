 function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO], Dados invalidos')
    }
    else {
         var i = Number(inicio.value)
         var f = Number(fim.value)
         var p = Number(passo.value)
         res.innerHTML = 'Contando: ...'

         for(c = i; c <= f; c += p){
            res.innerHTML += `${c}`
         }
    }
 }