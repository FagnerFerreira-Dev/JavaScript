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

function verificarPermissao(tipo) {
    switch (tipo) {
        case `Admin`:
            console.log(`acesso total`);
            break;
        case `editor`:
            console.log(`pode editar`);
            break;
        case `user`: 
            console.log(`poder visualizar`);
            break;
        default:
            console.log(`acesso negado`);
            
            break;
    }
}



verificarPermissao(`user`)
verificarPermissao(`admin`)
verificarPermissao(`editor`)
verificarPermissao(4)


switch(`domingo`){
    case `sabado`:
    case `domingo`:
        console.log(`fim de semana`);
        break;
    default:
        console.log(`dia útil`);         
}