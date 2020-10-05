/*
1) Given the array,
Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
Loop through the array to find the longest word by how many letters each string contains.
Which other variables will you be needing?

2) Print the length of the longest word to the console.
*/

let lunchArray = [ 'Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf' ]
let longestWord = 0;

for(let i = 0; i < lunchArray.length; i++) {
    if(lunchArray[i].length > longestWord) {
        longestWord = lunchArray[i].length;
    }
}

console.log(longestWord);

/* 

3) Print the longest word to the console.
*/


let lunchArray = [ 'Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf' ]
let longestWord = "";

for(let i = 0; i < lunchArray.length; i++) {
    if(lunchArray[i].length > longestWord.length) {
        longestWord = lunchArray[i];
    }
}

console.log(longestWord);

/*
4) Now what if the array was 
Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]

Since all the words are in one string together, how would you solve this? 
*/

let lunchArray = [ 'Burger  Salad  Lasagna Sushi  Meatloaf' ];
let lunchArraySplit = lunchArray.toString().split(' ');
let longestWord = "";

for(let i = 0; i < lunchArray.length; i++) {
    if(lunchArraySplit[i].length > longestWord.length) {
        longestWord = lunchArraySplit[i];
    }
}

console.log(longestWord);

/*
B) Write a function that returns elements on odd positions in a list. 
*/

list = ["ABC Company", "123 Product", "DEF Company", "456 Product"]

function oddIndex(array) {
  let oddProducts = [];

  for (let i = 0; i < array.length; i++) {
    if(i % 2 ===! 0){
      oddProducts.push(array[i]);
    }
  }
  return oddProducts
}

console.log(oddIndex(list));

/*
C) Function factorial(n) {
}
Compute the factorial of any given number.
*/


function factorial (num){
  if (num==0 || num==1){
    return 1;
  }
  return factorial(num-1)*num;
} 

console.log(factorial(5));

/*
D) Conditional Practice
Write an if statement and determine a condition where:
If mpg is less than or equal to 10, console “gas guzzler”
If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
If mpg is between 17-20, console “ it’s palpable”
If mpg is between 21-29, console “ Atmosphere smiles at your decision”
If mpg is between 30-35, console “ Not many gas stops will be taken”
If mpg is above 35 console “ The fish of the sea smile at your conservation”
If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
After testing each one, the mpg variable to ensure it is good.

*/

let mpg = prompt("Enter your mpg", "");

if (mpg <= 10){
    console.log("gas guzzler")
} else if (mpg <= 16 && mpg >= 11){
    console.log("Planet still frowns upon this, and so does your wallet")
} else if (mpg <= 20 && mpg >= 17){
    console.log("it’s palpable")
} else if (mpg <= 29 && mpg >= 21){
    console.log("Atmosphere smiles at your decision")
} else if (mpg <= 35 && mpg >= 30){
    console.log("Not many gas stops will be taken")
} else if (mpg == 120){
    console.log("if you are using the Tom Ogle fuel system, props")
}else {
    console.log("The fish of the sea smile at your conservation")
}