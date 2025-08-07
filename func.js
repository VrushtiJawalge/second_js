// 1. Create a function to print 'Hello, World!'
function func(){
    console.log("Hello world")
}
func()

//  2. Create a function that takes two numbers and returns their sum.
function sum(a,b){
    console.log(a+b)
}
sum(10,20)

//  3. Create a function that checks if a number is even or odd.
function evenodd(num){
    if(num%2==0){
        console.log(`${num} is even number`)
    }
    else{
          console.log(`${num} is odd number`)
    }
}
evenodd(9)

//  4. Create a function that returns the square of a number.
function sqr(c){
     console.log(`squre of ${c} is`,c*c)
}
sqr(2)
//  5. Create a function that takes a name as input and prints a greeting message.
function greet() {
    let name = prompt("Enter your name:");
    console.log(`Hello, ${name} Welcome.`);
}
greet();

//  6. Create a function that returns the largest of three numbers.
function findGreatest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is the greatest number.`;
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} is the greatest number.`;
    } else if (num3 > num1 && num3 > num2) {
        return `${num3} is the greatest number.`;
    } else {
        return `Two or more numbers are equal and greatest.`;
    }
}
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));
console.log(findGreatest(num1, num2, num3));


//  7. Create a function to calculate the factorial of a number.
function factorial(n) {
    if (n < 0) return "Invalid input";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));
//  8. Create a function that reverses a given string.
function reverseString(str) {
    return str.split();
}
console.log(reverseString("hello"));
//  9. Create a function to check if a number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

//  10. Create a function that counts the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3

