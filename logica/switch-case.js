const pontos = true;
let jogadorNivel;

switch(pontos){
    
    case 1:
        jogadorNivel = `bronze`;
        break
    case 2:
        jogadorNivel = `prata`;
        break
    case 3: 
        jogadorNivel = `ouro`
        break
    case true:
        jogadorNivel = `é verdade confia`
        break
    default:
        jogadorNivel = `erro`
        break
}

console.log(jogadorNivel);
