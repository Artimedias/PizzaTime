number = 9;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
let c = a;
    for(i = 0; i < (a); i++)
    {
        if (c >= 5)
        {
            b = (b+"V")
            c = (c - 5)
        }
        else if (c === 4)
        {
            b = (b+"IV")
            c = (c - 4)
        }
        else if (c >= 1)
        {
            b = (b + "I")
            c = (c - 1)
        }
        else
        {
        	 console.log("stopped early!")
            return b;
        }
    }
    return b;
}