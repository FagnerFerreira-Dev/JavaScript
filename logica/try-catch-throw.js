// let nome;
// console.log(nome);

// try{
//     console.log(nome);
// } catch(e){
// console.log(`a variavel não existe`);

// }


// try{
//     console.log(nome);
// }catch(e){
//     console.log(e.name);
// } finally{
//     console.log(`operação finalilzada`);
    
// }
let erro =new Error("");
;



function dividir(a, b) {
    try {
        if (b === 0) {throw new Error("Divisão por zero")}
        if (a,b) {
            return a / b;
        } 

        console.log(g);
        
        
    } catch (error) {
        console.log(error.message);
        console.log(error.name);
        console.log(error);
        
    } finally{
        console.log(`operação finalizada`);
        
    }
}


dividir(erro)