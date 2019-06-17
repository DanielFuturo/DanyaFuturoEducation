function EvenFibonacci()
{
    let FibValues = [0,1];
    let answer = 0;
    for(i = 0; ; i++)
    {
        let value = FibValues[i] + FibValues[i+1];
        if(value > 4000000)
            break;
        FibValues.push(value);
        if(!(value%2))
            answer += value;
    }
    return answer;
}

console.log(EvenFibonacci());