function SumSquareDiff(n) {
    let sum = 0;
    let square = 0;
    for(i = 1; i <= n; i++)
    {
        sum += i * i;
        square += i; 
    }
    return square * square - sum;
}

console.log(SumSquareDiff(100));