function LargestNumber() {
    let answer = 0;

    for(i = 999; i > 0; i--)
    {
        for(j = i; j < 1000; j++)
        {
            value = i*j;
            valueText = String(value);
            if(valueText.length%2)
                break;
            valueTextMirror = valueText.slice(-(valueText.length / 2)).split("").reverse().join("");
            if(valueTextMirror == valueText.substr(0, (valueText.length /2)))
            {
                if(value > answer)
                    answer = value;
            }

        }
    }

    return answer;
}
console.log(LargestNumber());