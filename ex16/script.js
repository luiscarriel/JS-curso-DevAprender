// Velocidade máxima 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pntos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    if ( velocidade <= 70 )
    console.log("ok");
    else {
        const pontos = Math.floor(((velocidade - 70) / 5));
        if( pontos >= 12 )
        console.log("Carteira Suspensa");
        else
        console.log("Pontos", pontos);
    }
}