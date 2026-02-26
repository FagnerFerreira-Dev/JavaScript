

// function gRandom(v){
//     return Math.ceil((Math.random() * v))
// } 

// let random = gRandom(5)


// while (random !== 5) {
//     console.log(random);
//     random = gRandom(5)
// }

// do {
//     console.log(random);
//     random = gRandom(5)
// } while (random !== 5);





let lista = [1,2,3,4,5,6,7,8,9,10];

for (let v of lista){
    if ( v % 2 === 1) {
        continue
    }
    console.log(v);
    
}

let cor = `roxo`

switch(cor){
    case `vermelho`:
        console.log(`vermelho`);
        break;
    case `verde`: 
        console.log(`verde`);
        break;
    case `roxo`: 
        console.log(`roxo`);
        break;

}