const imagem = document.getElementById('troca-imagem')

function trocaImagem() {
    console.log('to dentro da função')
    if(imagem.style.opacity == 0){
        imagem.style.opacity = 1
    }
    else{
        imagem.style.opacity = 0
    }
}

setInterval(() => {
    trocaImagem()
}, 4000);