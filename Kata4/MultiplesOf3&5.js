const multipliers = [3,5];
const belowNumber = 1000;

FindSumOfNaturalNumbers();

function FindSumOfNaturalNumbers()
{
    let answer = 0;
    for(i = 1; i < belowNumber; i++)
    {
        for(j of multipliers)
        {
            if(!(i%j))
            {
                answer+=i;
                break;
            }
        }
    }
    console.log(answer);
}