function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'm.png'
        window.document.body.style.background = 'rgba(247, 231, 4, 0.452)'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 't.png'
        window.document.body.style.background = 'rgba(230, 163, 39, 0.774)'
    } else {
        //BOA NOITE!
        img.src = 'n.png'
        window.document.body.style.background = 'rgba(5, 7, 119, 0.822)'
    }
}