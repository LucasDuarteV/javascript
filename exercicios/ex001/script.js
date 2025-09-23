function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffea8dff'
        document.body.style.color = 'black'
    }

    else if (hora >= 12 && hora < 18 ) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FFD9A0'

    } else
        {
            img.src = 'imagens/noite.png'
            document.body.style.background = '#0B1A3A'
        }
}
