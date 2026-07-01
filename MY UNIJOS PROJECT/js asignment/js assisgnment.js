                     //java script asssignment
//====================== 
//1.JAVA SCRIPT VARIABLES
//======================

//Question:write five difference examples using javascrpt variables

// ==========================
// LET VARIABLES (this is use to store data that can be changed later)
// ==========================

let firstName = "bakmi";
console.log(firstName);

let age = 25;
console.log(age);

let country = "Nigeria";
console.log(country);

let isStudent = true;
console.log(isStudent);

let score = 95;
console.log(score);


// ===========================
// CONST VARIABLES (this is use to store data that cannot be changed later)
// ===========================

const school = "university of jos";
console.log(school);

const pi = 3.14159;
console.log(pi);

const birthYear = 2001;
console.log(birthYear);

const favoriteColor = "ash blue";
console.log(favoriteColor);

const hasLaptop = true;
console.log(hasLaptop);


// =========================
// VAR VARIABLES (this is use to store data that can be changed later, it is an older way of declaring variables)
// =========================

var city = "Abuja";
console.log(city);

var temperature = 30;
console.log(temperature);

var language = "JavaScript";
console.log(language);

var price = 100000;
console.log(price);

var hobby = "reading";
console.log(hobby);

  //list 3 java script operator and three examples each
// ===============================
// LOGICAL AND (&&)
// these Returns true if BOTH conditions are true
// ===============================

console.log(10 > 5 && 20 > 15); // true
console.log(8 < 5 && 12 > 6);   // false
console.log(30 == 30 && 5 != 5); // false


// ===============================
// LOGICAL OR (||)
// these Returns true if AT LEAST ONE condition is true
// ===============================

console.log(30 > 5 || 20 < 15); // true
console.log(8 < 5 || 12 > 6);   // true
console.log(4 > 8 || 2 > 5);    // false


// ===============================
// LOGICAL NOT (!)
// these Reverses the result
// ===============================

console.log(!(10 > 5));   // false
console.log(!(8 < 5));    // true
console.log(!(20 == 20)); // false

// ===============================
// ALERT()  (these is use to display a message to the user)
// ===============================

// Example 1
alert("Welcome to unijos!");

// Example 2
alert("Your registration was successful!");

// ===============================
// PROMPT() (to get user input from the user)
// ===============================

// Example 1
let name = prompt("What is your name?");
console.log(name);

// Example 2
let age = prompt("How old are you?");
console.log(age);

// ===============================
// USING PROMPT() AND ALERT() TOGETHER (2)
// ===============================

// Example 1
let username = prompt("Enter your name:");
alert("Welcome, " + username + "!");

// Example 2
let favoriteColor = prompt("What is your favorite color?");
alert("Your favorite color is " + favoriteColor + ".");