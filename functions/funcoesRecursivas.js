function fatorial(n) {
// n! = n.(n-1)
// caso base:
    if (n === 0){
        return 1
    }
// passo recursivo:

return n * fatorial(n-1)

}

console.log(fatorial(5));
console.log(fatorial(2));

