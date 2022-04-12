function reverse (string){
 var temp = "";
    for(var i = string.length - 1 ; i > -1; i--){ //decrementing loop to start at the end of string 
        temp += string[i];
    }
    return temp;
}

console.log(reverse("hey"));
console.log(reverse("Ben"));
console.log(reverse("Tenz"));

function numVowels (string){
    var count = 0;
    //Switch case maybe? No, loop to iterate through the entire string
    for(var i = 0; i < string.length;i++){
        if(string[i] == "a" || string[i] == "e"|| string[i] == "i"|| string[i] == "o" || string[i] =="u"){
            count++;
        }
    }
    return count;
}
console.log(numVowels("Benjamin"));
console.log(numVowels("Volleyball"));
console.log(numVowels("Ball"));

function numStringsShorterThanLength(strings, length){
    var numOfStrings = 0;
    for(var i = 0; i < strings.length;i++){
        if (strings[i].length < length){
            numOfStrings++;
        }

    }
    return numOfStrings;

}


var flowers = ["aster", "daffodil", "periwinkle", "lilies"];

console.log(numStringsShorterThanLength(flowers, 6));
console.log(numStringsShorterThanLength(flowers, 9));
console.log(numStringsShorterThanLength(flowers, 5));
