//  1. Create an array and print all elements
let array=["vrushti","shruti","harsh"]
console.log("array is:",array)

// 2. Find the length of an array
console.log("array length is:",array.length)

 //3. Access the first and last element of an array.
console.log("first element of an array is:",array[0])
console.log("last element of an array is:",array[2])

//  4. Add a new element to the end of the array.
console.log("Added a new element to the end of the array:",array.push("tanuja"),array)

//  5. Remove the last element from the array.
console.log("Removed the last element from the array:",array.pop(),array)

//  6. Find the sum of all elements in a numeric array.
let array2=[1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(let i=0; i < array2.length; i++) {
  sum += array2[i];
}
console.log("Sum of all elements is:", sum);

//  7. Check if an element exists in an array.
let element=parseInt(prompt("Enter an any element "))
if (array2.includes(element)){
  console.log(`${element} Element exists in array`);
}
else{
    console.log(`${element} Element not exists in array`);
}

//  8. Count how many even numbers are in the array.
let count = 0;
for(let i = 0; i < array2.length; i++) {
  if(array2[i] % 2 === 0) {
    count++;
  }
}
console.log("Total even numbers are in the array:", count);

//  9. Print array elements in reverse order.
console.log(array2.reverse())

//  10. Find the largest number in an array
let max = array2[0];
for(let i = 1; i < array2.length; i++) {
  if(array[i] > max) {
    max = array2[i];
  }
}
console.log("the largest number in an array is:", max);