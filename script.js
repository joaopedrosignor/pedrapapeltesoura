function escolhaComp(){
    const jokeipo = ['Pedra', 'Papel', 'Tesoura']
    var numeroAleatorio = Math.floor(Math.random()*3)
    return jokeipo[numeroAleatorio]
}
function jogar(escolhaJogador){
    var comp = escolhaComp()
    var resultado = ''
    if(comp === escolhaJogador){
        resultado = "Empate!"
    } else if(((escolhaJogador === 'Papel') && (comp === 'Pedra')) || ((escolhaJogador === 'Pedra') && (comp === 'Tesoura')) || ((escolhaJogador === 'Tesoura') && (comp === 'Papel'))){
        resultado = "Ganhou"
    } else{
        resultado = "Perdeu"
    }
    document.getElementById('resultado').innerText = resultado
    document.getElementById('escolhaComp').innerText = comp
}