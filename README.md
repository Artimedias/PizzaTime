Tests

Testing: Nums

Test 1: Nums should print out an I for number 1
Code: 

number = 1;
nums(number)
function nums(input)

{
 if(input === 1){
     console.log(1)
 }
 else{
     console.log("null")
 }
}
Expected Result: 1

Test 2: Nums should print out an I for whatever number is equal to
Code:

number = 5;
string = ("null");
console.log(nums(number, string));
function nums(a, b)
{
    for(i = 0; i = (a-1); i++)
    {
        b = (b + "I")
    }
    return b;
}

Expected Result: IIIII

Test failed.
Reason: For loop could never run because it could only run until I was equal to (a-1)

Test 3:Nums should print out an I for whatever number is equal to
Code:

number = 5;
string;
console.log(nums(number, string));
function nums(a, b)
{
    for(i = 0; i < (a-1); i++)
    {
        b = (b + "I")
    }
    return b;
}

Expected Result: IIIII

Test failed
Reason: String has no value. 

Test 4:Nums should print out an I for whatever number is equal to
Code:

number = 5;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
    for(i = 0; i < (a-1); i++)
    {
        b = (b + "I")
    }
    return b;
}

Expected Result: IIIII

Test failed.
Reason: Since the for loop only runs while it's less than a, it's actually stopping at 4 times since we told it to only run while less than, instead of running until it was equal to.

Test 5:Nums should print out an I for whatever number is equal to
Code:

number = 5;
string = ("");
console.log(nums(number, string));
function nums(a, b)
{
    for(i = 0; i < (a); i++)
    {
        b = (b + "I")
    }
    return b;
}

Expected Result: IIIII

Test 6: Nums should print out a V for every 5, and an I for every 1
Code:

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

Expected Result: VII

Test 7: Nums should only allow a maximum of 3 I's to be placed in a row, and do IV if there is four

number = 9;
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
        else if (a === 4)
        {
            b = (b+"IV")
            a = (a - 4)
        }
        else
        {
            b = (b + "I")
        }
    }
    return b;
}

Expected Result: VIV
Test failed. 
Reason: Uncaught Error from previous test, changing the value of a has unintended consequences for the for loop

Test 8: Nums should print out a V for every 5, and an I for every 1

number = 12;
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
        else if (c >= 1)
        {
            b = (b + "I")
            c = (c - 1)
        }
        else
        {
            return b;
        }
    }
    return b;
}
Expected Result: VVII

Test 9: Nums should only allow a maximum of 3 I's to be placed in a row, and do IV if there is four

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
            c = 
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

Expected Result: VIV