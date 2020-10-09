//1. Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countDown(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        return numbers;
    }
}

console.log(countDown(numbers));

//2. Using a while loop, return an array that contains all odd numbers between 3 and 103


let i = 3;
let end = 103;
let anArray = [];
while (i <= end){
    anArray.push(i);
    i +=2;
}
console.log(anArray);


//3.  arraySum(num) receives an array of numbers as an argument and returns 
//the sum of all numbers,  for example: 
//arraySum([1, 2, 3, 4, 5, 6]) => 18, use any loop. 

let array = [1, 2, 3, 4, 5, 6];

function arraySum(num){
    let sumNum = 0;
    for(let i = 0; i < num.length; i++) {
        sumNum += num[i];
    } 
    return sumNum;
}

console.log(arraySum(array));



//4. Use a loop to display the numbers 9 to 0 in descending order.

for (let input = 9; input <= 10 && input > -1; input--){
    console.log(input);
}



//5. Write a function computing the factorial of n

function factorIt(n) {
    let result = n;

    while(n > 1) {
        n--;
        result *= n;
    }
    return result;
}

console.log(factorIt(5));


//6. Write a function using a for loop that returns the 
//sum of all numbers from 1 to n. 

function sumAll(n){
    let result = 0;

    for(let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

console.log(sumAll(100));

//7. Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. 
//Assume there are no spaces.
//Let string = “donuts”
//Expected output => dZnZtZ

function zeeUpper(str){
    let stringArray = str.split("").map((letter, index) => {
        if(index % 2 === 1){
            return letter = "Z";
        } else {
            return letter.toLowerCase();
        }
    }).join("");
    
    return stringArray;
}

console.log(zeeUpper("donuts"));