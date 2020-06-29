var posicao = {}

function SetPosicao (){
    posicao = {linha:document.getElementById("entradaLinha").value,
            coluna:document.getElementById("entradaColuna").value}
    
    console.log(posicao.linha)
    console.log(posicao.coluna)
}

