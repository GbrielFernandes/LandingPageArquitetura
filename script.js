var imagem = document.getElementById('imagem')
var imagem2 = document.getElementById('imagem2')

function TrocarDeImagem(){
    imagem.style = 'display:none;cursor:pointer;'
    imagem2.style = 'display:flex; width:550px; border-radius:25px; height:600px; cursor:pointer;'
}

function TrocarNovamente(){
    imagem2.style = 'display:none;cursor:pointer;'
    imagem.style = 'display:flex;cursor:pointer;'
}