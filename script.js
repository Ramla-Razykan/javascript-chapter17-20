// ==================Question1: Declare and initialize an empty multidimensional array. (Array of arrays) 
// let array = [[]];

// ==================Question2: Declare and initialize a multidimensional array representing the following matrix:  
// let arraymatrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// console.log(arraymatrix);

// ==================Question3: Write a program to print numeric counting from 1 to 10.  
// for (let k = 1; k <= 10; k++) {
//     console.log(k);
// }

// ==================Question4: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 
// let tableNumber = Number(prompt("Enter a number to show its Multiplication: "));
// let tableLength = Number(prompt("Enter the length of the table: "));

// for (let i = 1; i <= tableLength; i++) {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br/>`);
// }

// ==================Question5: Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let k = 0; k < fruits.length; k++) {
//     document.write(`${fruits[k]}<br/>`);
// }
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`Element at index is ${[i]} ${fruits[i]} <br/>`);
// }

// ==================Question6: Generate the following series in your browser. See example output. 
// // a. Counting
// document.write("Counting: ");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + (i < 15 ? ", " : ""));
// }

// // b. Reverse counting
// document.write(`<br/>Reverse counting: `);
// for (let i = 10; i >= 1; i--) {
//     document.write(i + (i > 1 ? ", " : ""));
// }

// // c. Even numbers
// document.write(`<br/>Even: `);
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + (i < 20 ? ", " : ""));
// }

// // d. Odd numbers
// document.write(`<br/>Odd: `);
// for (let i = 1; i < 20; i += 2) {
//     document.write(i + (i < 19 ? ", " : ""));
// }

// // e. Series
// document.write(`<br/>Series: `);
// for (let i = 1; i <= 20; i++) {
//     document.write((i * 2) + "k" + (i < 20 ? ", " : ""));
// }

// ==================Question7: You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for an item
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// // Check if the item is in the bakeryItems array
// let index = bakeryItems.indexOf(userInput);

// if (index !== -1) {
//     alert(`${userInput} is available at index ${index} in our bakery.`);
// } 
// else {
//     alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }

// ==================Question8: Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
// let a = [24, 53, 78, 91, 12];

// // Use Math.max with the spread operator to find the largest number
// let largest = Math.max(...a);

// document.write(`Array items:  ${a}<br/> `);
// document.write(`The largest number is:  ${largest} `);

// ==================Question9:  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
// let b = [24, 53, 78, 91, 12];

// // Use Math.min with the spread operator to find the smallest number
// let smallest = Math.min(...b);

// document.write(`Array items:  ${b}<br/> `);
// document.write(`The Smallest number is:  ${smallest} `);

// ==================Question10: Write a program to print multiples of 5 ranging 1 to 100. 
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
