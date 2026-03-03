function fatorial(n) {

    if (n === 0){
        // console.log(n);
        return 1;
    }
    
    
    return n * fatorial(n-1) 
    

}


// fatorial(5)
console.log(`----------------------`);

console.log(fatorial(5));


