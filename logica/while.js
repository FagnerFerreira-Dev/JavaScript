

function gRandom(v){
    return Math.ceil((Math.random() * v))
} 

let random = gRandom(5)


while (random !== 5) {
    console.log(random);
    random = gRandom(5)
}

do {
    console.log(random);
    random = gRandom(5)
} while (random !== 5);