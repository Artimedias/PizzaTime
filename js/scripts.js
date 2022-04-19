number = 3999;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
let c = a;
    for(i = 0; i < (a); i++)
    {
        if (c > 3999) 
        {
            b = ("Error: Number is beyond the limit of roman numeral")
        }
        else if (c >= 1000)
        {
            b = (b+"M")
            c = (c - 1000)
        }
        else if (c === 999)
        {
            b = (b+"IM")
            c = (c - 999)
        }
        else if (c >= 500)
        {
            b = (b+"D")
            c = (c - 500)
        }
        else if (c === 499)
        {
            b = (b+"ID")
            c = (c - 499)
        }
        else if (c >= 100)
        {
            b = (b+"C")
            c = (c - 100)
        }
        else if (c === 99)
        {
            b = (b+"IC")
            c = (c - 99)
        }
        else if (c >= 50)
        {
            b = (b+"L")
            c = (c - 50)
        }
        else if (c === 49)
        {
            b = (b+"IL")
            c = (c - 49)
        }
        else if (c >= 10)
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