//Section 1 
//chapter(ARRAYS AND LOOP)
//Q1
//var multiArray=[[],[],[],[]]
//console.log(multiArray)
//Q2
//var matrix = [
//  [1, 2, 3],
 // [4, 5, 6],
//  [7, 8, 9]
//];

//console.log(matrix)
//Q3
//for (let i = 1; i <= 10; i++) {
  //  console.log(i);
//}




//Q4


//Q5
//const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

//for (var i = 0; i < fruits.length; i++) {
    //console.log(fruits[i]);
//}
//Q6

// a.
//document.write("Counting:<br>");
//for (var i = 1; i <= 15; i++) {
   // document.write(i + (i < 15 ? ", " : "<br><br>  "));
//}

// b
//document.write("Reverse counting:<br>");
//for (var i = 10; i >= 1; i--) {
   // document.write(i + (i > 1 ?", " : "<br><br>"));
//}
// c
//document.write("Even:<br>");
//for (var i = 0; i <= 20; i += 2) {
    //document.write(i + (i < 20 ? ", " : "<br><br>"));
//}

// d.
//document.write("Odd:<br>");
//for (var i = 1; i < 20; i += 2) {
  //  document.write(i + (i < 19 ? ", " : "<br><br>"));
//}
// e.
//document.write("Series:<br>");
//for (var i = 1; i <= 10; i++) {
  // document.write((i * 2) + "k" + (i < 10 //? ", " : ""));
//}


//Q7
//var a =["cake","apple pie","cookie","chips","patties"]
//var userInput= prompt("search by user input")
//var found = a.includes(userInput.toLowerCase())
//if(found){
//  alert("cookie is available at index 2 in our bakery")
//}
//else {
  //alert("we are sorry . pastry is not a available in our bakery")
//}

//Q8
//var A = [24, 53, 78, 91, 12];
//var largest = A[0];
//for (let i = 1; i < A.length; i++) {
   // if (A[i] > largest) {
      //  largest = A[i];
  //  }
//}
//console.log("The largest number is:", largest);
//Q9
//var A = [24, 53, 78, 91, 12];
//var smallest = A[0];
//for (let i = 1; i < A.length; i++) {
   //if (A[i] < smallest) {
        //smallest = A[i];
   // }
//}
//console.log("The smallest number is:", smallest);

//Q10
//for (let i = 5; i <= 100; i += 5) {
    //console.log(i);
//}
//Section 2
//chapter (STRING METHODS)
//Q1
//var firstName = prompt("Enter your first name")
//var lasttName = prompt("Enter your last name")
//var fullName =firstName+" "+lasttName
//alert(fullName)
//Q2
//var mobileModel = prompt("Enter your favorite mobile phone model:");

//var lengthOfInput = mobileModel.length;

//alert("Your favorite mobile phone model is:" + mobileModel+ "Length is string:" + lengthOfInput);
//Q3
//var word ="Pakistan"
//var indexOf =word.indexOf("n")
//alert("Index of n "+indexOf)

//Q4
//var message = "Hello World";

//var lastIndex = message.lastIndexOf("l");

//console.log(lastIndex)

//Q5
//var word = "Pakistani";

//var character = word.charAt(3);

//console.log(character)
//Q6
//var message = "Ali and Sami are best friends. They play cricket and football together.";

//var updatedMessage = message.split("and").join("&");

//console.log(updatedMessage)
//Q7
// Original word
//var originalWord = "Hyderabad";

// Replace "Hyder" with "Islam"
//var replacedWord = originalWord.replace("Hyder", "Islam");

// Display the result
//console.log("Original Word: " + originalWord);
//console.log("Replaced Word: " + replacedWord);



//Q8
//var message = "Ali and Sami are best friends. They play cricket and football together.";
//var updatedMessage = message.replace(/and/g, "&");
//console.log(updatedMessage) 
//Q9

//var stringNumber = "472";

//var convertedNumber = Number(stringNumber);

//console.log("Original String: " + stringNumber + ", Type: " + typeof stringNumber);
//console.log("Converted Number: " + convertedNumber + ", Type: " + typeof convertedNumber);

//Q10
//var userInput = prompt("Enter some text:");

//var upperCaseInput = userInput.toUpperCase();

//alert(upperCaseInput);

//Q11
//var userInput = prompt("Enter some text:");

//var lowerCaseInput = userInput.toLowerCase();

//alert(lowerCaseInput);

//Q12
//var num = 35.36;
//var result = String(num).replace('.', '');
//console.log(result);
//Q13
//var username = prompt("Enter your username:");

//if (username.includes('@') || username.includes('.') || username.includes('!') || username.includes(',')) {
   // username = prompt("Please enter a valid username (no special symbols: @, ., !, ,).");
//}

//alert("Username accepted: " + username);
//Q14
//var a =["cake","apple pie","cookie","chips","patties"]
//var userInput= prompt("search by user input")
//var found = a.includes(userInput.toLowerCase())
//if(found){
//  alert("cookie is available at index 2 in our bakery")
//}
//else {
  //alert("we are sorry . pastry is not a available in our bakery")
//}

//Q16
//var universityArray = "University of Karachi".split("");
//document.write(universityArray.join("<br>"));
//Q17
//var userInput = prompt("Enter a string:");
//var lastCharacter = userInput[userInput.length - 1];
//document.write("The last character is: " + lastCharacter);
//Q18
//var str = "The quick brown fox jumps over the lazy dog";
//var wordToCount = "the";
//var occurrences = str.toLowerCase().split(wordToCount).length - 1;

//document.write("The word '" + wordToCount + "' occurs " + occurrences + " times.");


//Section 3
//chapter(MATH METHODS)
//Q1
//var input = prompt("Enter a positive integer:");

//var number = parseFloat(input);

//if (number > 0) {
//var roundedValue = Math.round(number);
    
   // var floorValue = Math.round(number - 0.5);
    
    //var ceilValue = Math.round(number + 0.5);

    //console.log('Number: ' + number);
    //console.log('Rounded Value: ' + roundedValue);
  //  console.log('Floor Value: ' + floorValue);
   // console.log('Ceil Value: ' + ceilValue);
//} else {
//    console.log('Please enter a positive integer.');
//}

//Q2
//var input = prompt("Enter a positive integer:");

//var number = parseFloat(input);

//if (number < 0) {
//var roundedValue = Math.round(number);
    
   // var floorValue = Math.round(number - 0.5);
    
    //var ceilValue = Math.round(number + 0.5);

    //console.log('Number: ' + number);
    //console.log('Rounded Value: ' + roundedValue);
  // console.log('Floor Value: ' + floorValue);
  // console.log('Ceil Value: ' + ceilValue);
//} else {
    //console.log('Please enter a negative integer.');
//}

//Q3
//var input = prompt("Enter a number:");

//var number = parseFloat(input);

//var absoluteValue = Math.abs(number);

//console.log('Absolute value of ' + number + ' is ' + absoluteValue);


//Q4
//var diceValue = Math.floor(Math.random() * 6) + 1;

//console.log('Dice value: ' + diceValue);


//Q5

//var toss = Math.random() < 0.5 ? 'Heads' : 'Tails';

//console.log('Coin toss result: ' + toss);
//Q6
//var randomNumber = Math.floor(Math.random() * 100) + 1;

//console.log('Random number between 1 and 100: ' + randomNumber);


//Q7
//var input = prompt("Enter your weight:");

//var weightMatch = input.match(/(\d+(\.\d+)?)\s*(kgs?|kilograms?)/i);

//if (weightMatch) {
   // var weight = +weightMatch[1];

   // console.log('Your weight is: ' + weight + ' kg');
//} else {
  //  console.log('Invalid input. Please enter your weight in a valid format.');
//}

//Q8
//var secretNumber = Math.floor(Math.random() * 10) + 1;

//var userInput = prompt("Guess a number between 1 and 10:");

//var userNumber = +userInput;

//if (userNumber >= 1 && userNumber <= 10) {
    //if (userNumber === secretNumber) {
        //console.log('Congratulations! You guessed the secret number: ' + secretNumber);
  //} else {
       //console.log('Sorry, the secret number was: ' + secretNumber);
   // }
//} else {
   // console.log('Please enter a valid number between 1 and 10.');
//}