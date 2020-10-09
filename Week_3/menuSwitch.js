//Make a switch statement with this variables and these conditions. 
//Make a variable restaurant Item. as well as a price. 

//Make the conditions, 
//Burger; $10
//Steak ; $25
//Salmon; $20
//Shrimp; $20
//Chicken; $15

//Make a default instructing option not available. 

const item = prompt("What item do you want the price for?","");

switch(item) {
    case "Burger": 
        console.log("$10");
        break;
    case "Steak": 
        console.log("$25");
        break;
    case "Salmon": 
        console.log("$20");
        break;
    case "Shrimp": 
        console.log("$20");
        break; 
    case "Chicken": 
        console.log("$15");
        break;
    default:
        console.log("Option not available.");   
}