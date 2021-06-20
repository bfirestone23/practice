// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (num) => {
    if (num <= 2) return 1;
    return fib(num - 2) + fib(num - 1);
}

console.log(fib(35))