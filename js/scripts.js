number = 19;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
let c = a;
    for(i = 0; i < (a); i++)
    {
        if (c >= 10)
        {
            b = (b+"X")
            c = (c - 10)
        }
        else if (c === 9)
        {
            b = (b+"IX")
            c = (c - 9)
        }
        else if (c >= 5)
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
