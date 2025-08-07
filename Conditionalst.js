 //1. Check if a number is positive or negative
let num1=parseInt(prompt("Enter a number to check number is positive or negative"));
if(num1>0){
    console.log(`${num1} is positive`)
}
else{
      console.log(`${num1} is negative`)
}
// 2. Check if a number is even or odd
let num2=parseInt(prompt("Enter a number to check entered number is even or odd"));
if(num2%2==0){
      console.log(`${num2} is even`)
}
else{
      console.log(`${num2} is odd`)
}
// 3. Check if a person is eligible to vote (age >= 18)
let age=parseInt(prompt("Enter your age to check you are eligible to vote or not"))
if(age>=18){
      console.log(`${age} is eligible to vote`)
}
else{
      console.log(`${age}years old person is not eligible to vote`)
}
// 4. Find the greatest of two numbers
let num3=parseInt(prompt("Enter first number"))
let num4=parseInt(prompt("Enter second number"))
if(num3>num4){
    console.log(`${num3} is greater number`)
}
else{
     console.log(`${num4} is greater number`)
}
// 5.Find the greatest of three numbers.
let num5=parseInt(prompt("Enter first number"))
let num6=parseInt(prompt("Enter second number"))
let num7=parseInt(prompt("Enter third number"))
if(num5>num6){
    console.log(`${num5} is greater number`)
}
else if(num5<num6){
     console.log(`${num6} is greater number`)
}
else{
     console.log(`${num7} is greater number`)
}
// 6.Check if a year is a leap year or not
let year=parseInt(prompt("Enter a year:"));
if((year%4==0 && year % 100 !== 0) || (year % 400== 0)) {
    console.log(`${year} is leap year.`);
} 
else{
    console.log(`${year} is not leap year.`);
}
// 7. Check whether a character is a vowel or consonant
let char=prompt("Enter a character to check entered character is a vowel or consonant")
if(char == "a"|| char == "e" ||char == "i" || char == "o" || char == "u"){
    console.log(`${char} is vowel`);
}
else{
    console.log(`${char} is constant`);
}
// 8. Assign grades based on marks (A, B, C, F)
let m1=num5=parseInt(prompt("Enter your mark"))
if(m1>=100){
    console.log("grade A");
}
    else if(m1>=80){
         console.log("grade B");
    }
    else if(m1>=60){
         console.log("grade C");
    }
    else if(m1>=40){
         console.log("grade F");
    }

// 9. Check if a number is divisible by 5 and 11.
let num8=parseInt(prompt("Enter a number"))
if(num8%5==0){
     console.log(`${num8} is divisible by 5`);
}
else if(num8%11==0){
     console.log(`${num8} is divisible by 11`);
}
// 10. Use ternary operator to check if a number is even or odd
let num9=parseInt(prompt("Enter a number:"));
let result=(num9%2==0) ? "Even":"Odd";
console.log(`${num9} is ${result}`);
