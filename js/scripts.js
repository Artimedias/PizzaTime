number = 7;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
    for(i = 0; i < (a); i++)
    {
        if (a >= 5)
        {
            b = (b+"V")
            a = (a - 4)
        }
        else
        {
            b = (b + "I")
        }
    }
    return b;
}