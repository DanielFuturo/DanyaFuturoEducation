function SmallestMultiple(n) {
    let answer = n;
    let dividable = true;
    while(dividable)
    {
        for(i = n; i > 0; i--)
        {
            dividable = Boolean(answer % i);
            if(dividable)
            {
                answer++;
                break;
            }
        }
    }
    return answer;
}

console.log(SmallestMultiple(20));