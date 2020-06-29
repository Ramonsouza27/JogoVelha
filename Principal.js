var board = []
const player1 = {tela:"X",conteudo:1}
const player2 = {tela:"O",conteudo:2}
var ChangePlayer = true

function SetPosicao (){
    return {linha:document.getElementById("entradaLinha").value,
            coluna:document.getElementById("entradaColuna").value}
    
}

function CurrentPlayer (){
    if(ChangePlayer){
        console.log("JOGADOR 1")
        var posicao = SetPosicao()
        if(InputMove(posicao.coluna,posicao.linha,player1))
        ChangePlayer = !ChangePlayer
    }
    else{
        console.log("JOGADOR 2")
        var posicao = SetPosicao()
        if(InputMove(posicao.coluna,posicao.linha,player2))
        ChangePlayer = !ChangePlayer
    }
}

function NewBoard (){
    board = [
        [{tela:" ",conteudo:0},{tela:" ",conteudo:0},{tela:" ",conteudo:0}],
        [{tela:" ",conteudo:0},{tela:" ",conteudo:0},{tela:" ",conteudo:0}],
        [{tela:" ",conteudo:0},{tela:" ",conteudo:0},{tela:" ",conteudo:0}],
    ]
}

function ShowBoard (){
    for(let row =0; row<3; row++){
        console.log(board[row][0].tela+"|"+board[row][1].tela+"|"+board[row][2].tela)
    }
    console.log()    
}

function InputMove (col, row, player){
    if(ValidateMove(col,row)){
        board[row][col] = player
        ShowBoard()        
        Win()
        return true
    }else{
        Win()
        return false
    }
}

function ValidateMove (col, row){    
    if(col>=3 || row>=3){
        console.log("Posição não existente")
        return false
    }
    if(board[row][col].conteudo != 0){
        console.log("Posição já ocupada.")
        return false
    }
    console.log("Jogada Validada")
    return true
}

function Win (){
    if(RowWin() || ColumnWin() || DiagonalWin()){
        console.log("Fim de jogo.")
        return true
    }
    else{
        return false
    }
}

function RowWin (){
    var sum=0;

    for(let row =0; row<3; row++){
        for(let col =0; col<3; col++){
            sum += board[row][col]
        }
        if(sum == 3 || sum == 6){
            if(sum == 3){
                console.log("Jogador 1 vencedor.")            
            }
            else{
                console.log("Jogador 2 vencedor.")
            }
            return true
        }
    }
    return false
}

function ColumnWin (){
    var sum=0;

    for(let col =0; col<3; col++){
        for(let row =0; row<3; row++){
            sum += board[row][col]
        }
        if(sum == 3 || sum == 6){
            if(sum == 3){
                console.log("Jogador 1 vencedor.")            
            }
            else{
                console.log("Jogador 2 vencedor.")
            }
            return true
        }
    }
    return false
}

function DiagonalWin (){
    var sum1 = 0
    var sum2 = 0

    sum1 = board[0][0].conteudo+board[1][1].conteudo+board[2][2].conteudo
    sum2 = board[0][2].conteudo+board[1][1].conteudo+board[2][0].conteudo

    if(sum1 == 3 || sum1 == 6 || sum2 == 3 || sum2 == 6 ){
        if(sum1 == 3 || sum2 == 3){
            console.log("Jogador 1 vencedor.")            
        }
        else{
            console.log("Jogador 2 vencedor.")
        }
        return true
    }

    return false
}

NewBoard()