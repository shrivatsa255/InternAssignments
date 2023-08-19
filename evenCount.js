function countEvenNumbers(num) 
{
    let count=0;
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2===0)
        {
            count++;
        }

    }
    console.log("The count of even numbers is:"+count)
}
 
    countEvenNumbers([1, 2, 3, 4, 5, 6]); 
    countEvenNumbers([10, 21, 32, 45]); 
    countEvenNumbers([7, 9, 11, 13]); 
    