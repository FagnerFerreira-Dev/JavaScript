function* conta5() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}


let conta = conta5()

console.log(conta.next());
console.log(conta.next());
console.log(conta.next());
console.log(conta.next());
console.log(conta.next());




