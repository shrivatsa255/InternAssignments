function findMaxValue(num) 
{
    let max=num[0];
    for(let i=1;i<num.length;i++)
    {
        if(num[i]>max)
        {
            max=num[i]
        }
    }
    console.log("The maximum number in the array is:"+max)
}
    
    findMaxValue([5, 9, 2, 6, 3]); // Output: 9
    findMaxValue([-10, -5, -2, -8]); // Output: -2
    findMaxValue([100, 87, 92, 105]); // Output: 105
    