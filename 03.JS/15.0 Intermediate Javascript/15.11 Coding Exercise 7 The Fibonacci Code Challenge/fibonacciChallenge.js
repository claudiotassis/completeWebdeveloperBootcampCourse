function fibonacciGenerator (n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        var fibo = fibonacciGenerator(n - 1);
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        return fibo;
    }
}
fibonacciGenerator(10);