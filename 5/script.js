// ==========================================
// 1. Addition of two numbers
// ==========================================
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");


// ==========================================
// 2. Subtraction, Multiplication, Division & Modulus
// ==========================================
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");


// ==========================================
// 3. JS Mathematic Expressions
// ==========================================
// a. Declare a variable
let value;

// b. Show value after declaration
document.write("Value after variable declaration is: " + value + "<br>");

// c. Initialize the variable with 5
value = 5;

// d. Show initial value
document.write("Initial value: " + value + "<br>");

// e. Increment the variable
value++;

// f. Show value after increment
document.write("Value after increment is: " + value + "<br>");

// g. Add 7 to the variable
value = value + 7;

// h. Show value after addition
document.write("Value after addition is: " + value + "<br>");

// i. Decrement the variable
value--;

// j. Show value after decrement
document.write("Value after decrement is: " + value + "<br>");

// k. Remainder after dividing by 3
let remainder = value % 3;

// l. Show remainder output
document.write("The remainder is : " + remainder + "<br><br>");


// ==========================================
// 4. Movie Ticket Cost
// ==========================================
let ticketPrice = 600;
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;

document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + "PKR");
// ==========================================
// 5. Multiplication Table
// ==========================================
let tableNum = 4;

document.write("<h3>Table of " + tableNum + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(tableNum + "x" + i + "=" + (tableNum * i) + "<br>");
}
document.write("<br>");


// ==========================================
// 6. The Temperature Converter
// ==========================================
// a. Celsius to Fahrenheit
let celsius = 25;
let fahrenheitResult = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitResult + "°F<br>");

// c. Fahrenheit to Celsius
let fahrenheit = 70;
let celsiusResult = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusResult + "°C<br><br>");


// ==========================================
// 7. Shopping Cart Checkout Process
// ==========================================
let priceItem1 = 650;
let priceItem2 = 100;
let qtyItem1 = 3;
let qtyItem2 = 7;
let shippingCharges = 100;

let totalCartCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCartCost + "<br><br>");


// ==========================================
// 8. Marks Sheet & Percentage
// ==========================================
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");
// ==========================================
// 9. Currency in PKR
// ==========================================
let usDollars = 10;
let saudiRiyals = 25;
let totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");


// ==========================================
// 10. Arithmetic Sequence in Single Expression
// ==========================================
let num = 5;
let arithmeticResult = ((num + 5) * 10) / 2;

document.write("Result: " + arithmeticResult + "<br><br>");


// ==========================================
// 11. The Age Calculator
// ==========================================
let currentYear = 2016;
let birthYear = 1992;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age1 + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");


// ==========================================
// 12. The Geometrizer
// ==========================================
let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");


// ==========================================
// 13. The Lifetime Supply Calculator
// ==========================================
let favoriteSnack = "chocolate chip";
let currentAge = 15;
let maxAge = 65;
let amountPerDay = 3;
let totalNeeded = (maxAge - currentAge) * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
