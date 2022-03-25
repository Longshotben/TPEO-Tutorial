
// Function prints out the powers of three up to 3⁹ (example: 1, 3, 9, …, 19683) using a for loop
function powersOfThree(){ 
for (var i = 0; i <= 9; i++){ // for loop to iterate through exponent numbers
    console.log(Math.pow(3,i));

    if (Math.pow(3,i) == 19683){ //condition to see if 19683 is found 

        console.log ("This is my favorite power of 3!");
    } 
}
}
var timeoutId = setTimeout(powersOfThree, 3000);

//Write a function named everyTenSeconds that prints out “Hello World!” to the terminal every 10 seconds for a total of 2 minutes. 
function everyTenSeconds(){
    console.log ("Hello World!");
}
var intervalId = setInterval(everyTenSeconds, 10000);
setTimeout(clearInterval, 130000, intervalId); //120000 = 120 seconds = 2 minutes