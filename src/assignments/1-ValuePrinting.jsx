/**
 * 1. print the value from 1-100
 * 2. sum the value from 1-100
 * 3. Print all even no from 1-100
 * 4. Sum all the even no from 1-100
 * 5. Print all the years from 1990-2024
 * 6. Print leap years (divisible by 4) from 1990-2024
 * 7. Print the value from 100 - 1
 */

console.log("1. Printing the value from 1-100");
for (let i = 1; i <= 100; i++) {
    console.log(i, i !== 100 ? "," : "");
}


console.log("2. Sum the value from 1-100");
let sum=0;
for (let i = 1; i <= 100; i++) {
    sum=i+sum;
}
console.log("is: " + sum);


console.log("3. Print all even no from 1-100");
for (let i = 1; i <= 100; i++) {
    if(i%2===0)    {
        console.log(i);
    }
}


console.log("4. Sum all the even no from 1-100");
sum=0;
for (let i = 1; i <= 100; i++) {
    if(i%2===0)  {
        sum=i+sum;
    }
}
console.log("is: " + sum);


console.log("5. Print all the years from 1990-2024");
for (let i = 1990; i <= 2024; i++) {
    console.log(i, i !== 2024 ? "," : "");
}


console.log("6. Print leap years (divisible by 4) from 1990-2024");
for (let i = 1990; i <= 2024; i++) {
    if(i%4===0)  {
        console.log(i);
    }
}


console.log("7. Print the value from 100 - 1");
for (let i = 100; i >= 1; i--) {
    console.log(i, i !== 1 ? "," : "");
}