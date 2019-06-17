function FindPrime(n) {
    let counter = 0;
    for(let i = 1; ; i++)
    {
        if(IsPrime(i))
        {
            counter++;
            if(counter == n)
                return i;
        }
    }
}

function IsPrime(n) {
    if(n == 1)
        return false;
    
    if(n == 2)
        return true;

    for(let i = 2; i < n; i++)
    {
        if(n%i == 0)
            return false;
    }

    return true;
}

console.log(FindPrime(10001));