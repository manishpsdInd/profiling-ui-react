/**
 * array
 * 1. loop from 1-100
 * 2. store all the `even` numbers from the loop into an array
 * 3. push() : is used to store the value in an array
 * 4. do the sum of all the even number
 * 5. show the out put
 * 
 * function
 * 1. Loop from 1-100
 * 2. store all the `odd` and `even` numbers into two differnt array
 * 3. do the sum of both odd & event array
 * 4. compare which sum is greater or smaller
 */

let even = [];
let odd = [];

let range1 = getAndValidateNumber();
printOddAndEven(range1);
let range2 = getAndValidateNumber();
let range3 = getAndValidateNumber();
checkGreaterToSmallerOrder(range1, range2, range3);

function getAndValidateNumber() {
    const prompt = require ("prompt-sync")({sigint: true})
    const number = parseInt(prompt("Enter a positive number or 0 to exit:- "));
    
    if (number < 0) {
        getAndValidateNumber();
    } else if (number===0)  {
        return 0;
    } else if(+number) {
        return Number(number);
    } else {
        getAndValidateNumber();
    }
}

function printOddAndEven(range)    {
    if(range!==0) filterOddAndEven(range);
    console.log();
    console.log("Evens:- "+ even);
    console.log();
    console.log("Odds:- "+ odd);
    console.log();
    console.log("Sum of available evens: "+sumEvens());
    console.log("Sum of available odds: "+sumEvens());
    console.log();
}

function filterOddAndEven(range)   {
    for(let i=1; i<=range; i++)   {
        if(i%2===0)  {
            even.push(i);
        } else {
            odd.push(i);
        }
    }
}

function sumEvens()   {
    let sum = 0;
    for(let i=0; i<=even.length; i++)   {
        sum = sum + i;
    }
    return sum;
}

function checkGreaterToSmallerOrder(range1, range2, range3) {
    let sorted = [];
    if (range1<=range2 && range1<=range3) {
        sorted[1]=range1;
        if (range2<=range3) {
            sorted[2]=range2;
            sorted[3]=range3;
        } else {
            sorted[2]=range3;
            sorted[3]=range2;
        }
    } else if (range2<=range1 && range2<=range3) {
        sorted[1]=range2;
        if (range1 <= range3) {
            sorted[2]=range1;
            sorted[3]=range3;
        } else {
            sorted[2]=range3;
            sorted[3]=range1;
        }
    } else {
        sorted[1]=range1;
        if (range1 <= range2) {
            sorted[2]=range1;
            sorted[3]=range3;
        } else {
            sorted[2]=range2;
            sorted[3]=range1;
        }
    }
    console.log("Sorted:- "+ sorted);
}
