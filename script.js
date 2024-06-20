//Question1----------------------------------------------------------------------------------------------

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  console.log(fullName("Vinushiya", "Shanthalingam"));

//Question2----------------------------------------------------------------------------------------------

  console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//Question3-----------------------------------------------------------------------------------------------
  for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= 5; j++) {
        if (j === 1) {
            line += i; 
        } else if (j === 2) {
            line += " 1"; 
        } else {
            line += ` ${Math.pow(i, j - 2)}`; 
        }
    }
    console.log(line);
}




//Question4----------------------------------------------------------------------------------------------
const text = `There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool.`;
const andCount = (text.match(/\band\b/gi) || []).length;
console.log(` ${andCount}`);


//Question5---------------------------------------------------------------------------------------------
const currentY= new Date();
const currentYear = currentY.getFullYear();

console.log(`${currentYear}`);

const currentD = new Date();
const currentMonth = currentD.getMonth() + 1; //+1 is for 0-11 months

console.log(`${currentMonth}`);

const currentDate = new Date();
const currentDay = currentDate.getDate();

console.log(`${currentDay}`);

const currentW = new Date();
const currentDayOfWeek = currentW.getDay();

console.log(`${currentDayOfWeek}`); //friday

//Question6---------------------------------------------------------------------------------------------
const equation = 'y = 2x - 2'; //equation

const slope = 2; //slope

const yIntercept = -2;
const yInterceptPoint = `(0, ${yIntercept})`;  // Y-intercept (b)

const xIntercept = 1;
const xInterceptPoint = `(${xIntercept}, 0)`;  // X-intercept

console.log(` ${equation}`);
console.log(` ${slope}`);
console.log(` ${yIntercept} (${yInterceptPoint})`);
console.log(` ${xIntercept} (${xInterceptPoint})`);

//Question7--------------------------------------------------------------------------------------------
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;


const slope2 = (y2 - y1) / (x2 - x1);

console.log(`${slope}`);

// //Question8-------------------------------------------------------------------------------------------------
function calculateWeeklyEarnings(hours, ratePerHour) {
    return hours * ratePerHour;
}
let hours = prompt("Enter hours:");
hours = parseFloat(hours);
let ratePerHour = prompt("Enter rate per hour:");
ratePerHour = parseFloat(ratePerHour);
let weeklyEarnings = calculateWeeklyEarnings(hours, ratePerHour);
console.log(` ${weeklyEarnings}`);

//Question9---------------------------------------------------------------------------------------------
const currentYear1 = new Date().getFullYear();
let birthYear = prompt("Enter birth year:");
birthYear = parseInt(birthYear);
let age = currentYear1 - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}

//Question10----------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

//Question11---------------------------------------------------------------------------------------------
let numbers1 = [1, 2, 3, 4, 5];
let squareNumbers = numbers1.map(function(number) {
    return number * number;
});

console.log("Square numbers:", squareNumbers);

//Question12----------------------------------------------------------------------------------------------
//1....................................................................................
const books = [ 
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee", 
        genre: "Fiction",
        pages: 336, 
        publication_year: 1925, 
    }, 
    { 
        title: "1984", 
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328, 
        publication_year: 1949,
    }, 
    {
        title: "Pride and Prejudice", 
        author: "Jane Austen",
        genre: "Romance",
        pages: 432, 
        publication_year: 1813,
    }, 
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald", 
        genre: "Classic", 
        pages: 180,
        publication_year: 1925,
    },
];

const titles = books.map(book => book.title);

const authors = books.map(book => book.author);

const titleAndAuthor = books.map(book => {
    return { title: book.title, author: book.author };
});

console.log("Titles:", titles);
console.log("Authors:", authors);
console.log("Title and Author objects:", titleAndAuthor);

//2............................................................................................
const books1 = [ 
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee", 
        genre: "Fiction",
        pages: 336, 
        publication_year: 1925, 
    }, 
    { 
        title: "1984", 
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328, 
        publication_year: 1949,
    }, 
    {
        title: "Pride and Prejudice", 
        author: "Jane Austen",
        genre: "Romance",
        pages: 432, 
        publication_year: 1813,
    }, 
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald", 
        genre: "Classic", 
        pages: 180,
        publication_year: 1925,
    },
];

const totalPages = books1.reduce((total, book) => total + book.pages, 0);

const booksByYear = books1.reduce((acc, book) => {
    acc[book.publication_year] = (acc[book.publication_year] || 0) + 1;
    return acc;
}, {});

const totalTitleCharacters = books1.reduce((total, book) => total + book.title.length, 0);

const booksByGenre = books1.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
}, {});

console.log("Total number of pages:", totalPages);
console.log("Total number of books by publication year:", booksByYear);
console.log("Total number of characters in all the book titles:", totalTitleCharacters);
console.log("Total number of books by genre:", booksByGenre);


//3..........................................................................................
const books2 = [ 
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee", 
        genre: "Fiction",
        pages: 336, 
        publication_year: 1925, 
    }, 
    { 
        title: "1984", 
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328, 
        publication_year: 1949,
    }, 
    {
        title: "Pride and Prejudice", 
        author: "Jane Austen",
        genre: "Romance",
        pages: 432, 
        publication_year: 1813,
    }, 
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald", 
        genre: "Classic", 
        pages: 180,
        publication_year: 1925,
    },
];

const booksMoreThan100Pages = books2.filter(book => book.pages > 100);

const booksLessThan200Pages = books2.filter(book => book.pages < 200);

const fictionBooks = books2.filter(book => book.genre === "Fiction");

const romanceBooks = books2.filter(book => book.genre === "Romance");

console.log("Books with more than 100 pages:", booksMoreThan100Pages);
console.log("Books with less than 200 pages:", booksLessThan200Pages);
console.log("Books with a genre of 'Fiction':", fictionBooks);
console.log("Books with a genre of 'Romance':", romanceBooks);

// Question 13--------------------------------------------------------------------------
const greets = name => {
    return `Welcome ${name} to the team.`;
  };
  
  console.log(greets('Vinu')); 
  console.log(greets('Shiya')); 

// Question 14---------------------------------------------------------------------
const litres = time => {
    return Math.floor(time * 0.5);
  };
  
  console.log(litres(0)); 
  console.log(litres(2));
  console.log(litres(1.4));

//   Question 15-----------------------------------------------------------------------
const positiveSum = arr => {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  };
  
  console.log(positiveSum([1, 2, 3, 4, 5])); 
  console.log(positiveSum([1, -2, 3, 4, 5])); 
  console.log(positiveSum([-1, 2, 3, 4, -5])); 
  console.log(positiveSum([-1, -2, -3, -4, -5])); 
  console.log(positiveSum([]));
  
// Question 16----------------------------------------------------------------------------
const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    let category = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else if (bmi >= 30) {
      category = 'Obese';
    }
  
    return { bmi: bmi.toFixed(2), category };
  };
  
// condition........................................................................................
// Question1------------------------------------------------------------------------------------

function checkNumber(num) {
    let result = (num >= 0) ? "Positive" : "Negative";
    return result;
}
let number = 5;
console.log(`${number} ${checkNumber(number)}`); 

number = -3;
console.log(`${number} ${checkNumber(number)}`);

// question2----------------------------------------------------------------------------------
function checkEvenOdd(num) {
    let result = (num % 2 === 0) ? "Even" : "Odd";
    return result;
}
let number1 = 4;
console.log(` ${number1} ${checkEvenOdd(number1)}`); 
number2 = 7;
console.log(`${number2} ${checkEvenOdd(number2)}`); 

// Question3----------------------------------------------------------------------------
function findGreater(num1, num2) {
    let result = (num1 > num2) ? num1 : num2;
    return result;
}
let number3 = 10;
let number4 = 20;
console.log(`${findGreater(number3, number4)}`);

number5 = 45;
number6 = 30;
console.log(`${findGreater(number5, number6)}`); 

// Question 4-----------------------------------------------------------------------------------
function calculateTicketPrice(age) {
    let price = (age < 12) ? 5 :
                (age < 18) ? 10 :
                (age < 60) ? 20 : 15;
    return price;
}
let age1 = 10;
console.log(`${age1}  $${calculateTicketPrice(age1)}`); 
age = 16;
console.log(`${age1}  $${calculateTicketPrice(age1)}`); 

age = 30;
console.log(`${age1}  $${calculateTicketPrice(age1)}`); 

age = 65;
console.log(`${age1}  $${calculateTicketPrice(age1)}`); 

// Question 5-------------------------------------------------------------------------------------
function isLeapYear(year) {
    return (year % 4 === 0 );
}
let year = 2000;
console.log(`${year} ${isLeapYear(year) ? "a leap year" : "not a leap year"}.`); 

year = 1900;
console.log(`${year} ${isLeapYear(year) ? "a leap year" : "not a leap year"}.`); 

year = 2024;
console.log(`${year} ${isLeapYear(year) ? "a leap year" : "not a leap year"}.`); 

year = 2023;
console.log(`${year} ${isLeapYear(year) ? "a leap year" : "not a leap year"}.`); 

// Question6-----------------------------------------------------------------------------------
function calculateDiscount(amount) {
    let discount = (amount >= 100) ? 20 :
                   (amount >= 50) ? 10 : 0;
    return discount;
}

function finalPrice(amount) {
    let discount = calculateDiscount(amount);
    return amount - discount;
}

let amount = 120;
console.log(`amount$${amount} discount$${calculateDiscount(amount)} final price$${finalPrice(amount)}`);

amount = 75;
console.log(`amount$${amount} discount$${calculateDiscount(amount)} final price$${finalPrice(amount)}`);

amount = 30;
console.log(`amount$${amount} discount$${calculateDiscount(amount)} final price $${finalPrice(amount)}`);

// Question7-----------------------------------------------------------------------------------------
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = (hour < 12) ? "Good morning" :
                   (hour < 18) ? "Good afternoon" : "Good evening";
    
    return greeting;
}

console.log(getGreeting());

// Question 8------------------------------------------------------------------------------
function Game(secretNumber, guess) {
    if (guess < secretNumber) {
        console.log("Your guess is too low.");
    } else if (guess > secretNumber) {
        console.log("Your guess is too high.");
    } else {
        console.log("Congratulations! Your guess is correct.");
    }
}

let secretNumber = Math.floor(Math.random() * 100) + 1; 
let guess = 60; 
console.log(`Secret number: ${secretNumber}, Your guess: ${guess}`);
Game(secretNumber, guess);

// loops...........................................................................
// Question 1--------------------------------------------------------------------
for(i=0; i<=5; i++){
    console.log(i)
}

// Question 2---------------------------------------------------------------------
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += i;
}
console.log(`${sum}`);

// question 3-----------------------------------------------------------------------
let sumEven=0;
for (let i=10; i<=100; i+=2){
    sumEven += i;
}
console.log(`${sumEven}`)

// question 4-----------------------------------------------------------------------
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// question 5----------------------------------------------------------------------------
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let sumArray = [];

for (let i = 0; i < arr_3.length; i++) {
    sumArray.push(arr_3[i] + arr_4[i]);
}

console.log(sumArray); 

// Question 6------------------------------------------------------------------------------
let str1 = "javascript";

for (let i = 0; i < str1.length; i++) {
    if ((i + 1) % 2 === 0) {
        console.log('Z');
    } else {
        console.log(str1[i]);
    }
}

// Question 7----------------------------------------------------------------------------------
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

function sumArray1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let sum1 = sumArray1(arr_1);
let sum2 = sumArray1(arr_2);

let totalSum = sum1 + sum2;

console.log(`${sum1} + ${sum2} = ${totalSum}`); // Output: 276 + 351 = 627











