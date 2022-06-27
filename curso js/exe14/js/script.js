function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/m.png'
        window.document.body.style.background = 'rgba(228, 218, 76, 0.808)'
        msg.innerHTML = `Agora são ${hora} horas <strong>BOM DIA!</strong>`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/t.png'
        window.document.body.style.background = 'rgba(230, 163, 39, 0.774)'
        msg.innerHTML = `Agora são ${hora} horas <strong>BOA TARDE!</strong>`
    } else {
        //BOA NOITE!
        img.src = 'imagens/n.png'
        window.document.body.style.background = 'rgba(5, 7, 119, 0.822)'
        msg.innerHTML = ` Agora são ${hora} horas <strong>BOA NOITE!</strong>`
    }
}