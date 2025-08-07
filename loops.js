// 1. Print numbers from 1 to 10
console.log("numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum from 1 to 100:", sum);

// 3. Print even numbers between 1 and 50
console.log("Even numbers between 1 and 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Print the multiplication table of a number (e.g., 7)
let num = 7;
console.log(`Multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 5. Print reverse numbers from 10 to 1
console.log("Reverse numbers from 10 to 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 6. Find the factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 5 is:", factorial(5));

// 7. Reverse a given number
function reverseNumber(n) {
    let reversed = 0;
    while (n !== 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return reversed;
}
console.log("Reverse of 1234 is:", reverseNumber(1234));

// 8. Check if a number is a palindrome
function isPalindrome(n) {
    let original = n;
    let reversed = 0;
    while (n !== 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return original === reversed;
}
console.log("Is 121 a palindrome?", isPalindrome(121)); // true

// 9. Find the sum of digits of a number
function sumOfDigits(n) {
    let sum = 0;
    while (n !== 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log("Sum of digits of 1234 is:", sumOfDigits(1234));

// 10. Print Fibonacci series up to N terms
function fibonacci(n) {
    let a = 0, b = 1;
    console.log("Fibonacci series:");
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(10); // N terms
