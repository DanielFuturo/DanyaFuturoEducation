function PrimeFactor(num) {
    let primeFactor = [];
    while (num % 2 === 0){
        primeFactors.push(2);
        num = num / 2;
    }

    let sqrtNum = Math.sqrt(num);
    for(i = 3; i <= sqrtNum; i++)
    {
        while(num % i === 0)
        {
            primeFactor.push(i);
            num = num / i;
        }
    }

    if(num > 2) {
        primeFactor.push(num);
    }

    return primeFactor[primeFactor.length - 1];
}

console.log(PrimeFactor(600851475143));