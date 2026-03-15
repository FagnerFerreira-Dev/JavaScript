function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n-1) 
}
console.log(`o Fatorial de 5 é: ` + fatorial(5));


