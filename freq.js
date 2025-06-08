function countFrequency(array)
{
    let frequency={};
        for (let i = 0; i < array.length; i++) 
    {
    let num = array[i];
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}
    for(let num in frequency)
    {
        const count=frequency[num];
        if(count==4)
        {
            console.log(num+"Appears frequent time");
        }
        else if(count==3)
        {
            console.log(num+"Appears common time");
        }
        else if(count==1)
        {
            console.log(num+"Appears rare time")
        }
    }
}
countFrequency([1, 2, 2, 3, 1, 4, 2, 1, 1, 3]);